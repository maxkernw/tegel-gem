import { auth, addChalkLine, subscribeToChalkboard, clearChalkboard } from './firebase';
import { ChalkLine, ChalkPoint } from './types';
import { showConfirmModal } from './main';

export class Chalkboard {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private isDrawing = false;
    private currentPoints: ChalkPoint[] = [];
    private currentColor = '#00ffff';
    private currentWidth = 3;
    private allLines: ChalkLine[] = [];

    constructor(container: HTMLElement) {
        container.innerHTML = `
            <div class="chalkboard-container">
                <div class="chalkboard-controls">
                    <input type="color" id="chalk-color" value="#00ffff">
                    <input type="range" id="chalk-width" min="1" max="10" value="3">
                    <button id="clear-chalkboard" class="small-btn-neon">Clear Board</button>
                    <button id="back-to-calendar" class="small-btn-neon" style="border-color: #ff00ff; color: #ff00ff;">Calendar</button>
                </div>
                <canvas id="chalkboard-canvas"></canvas>
            </div>
        `;

        this.canvas = document.getElementById('chalkboard-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
        this.resize();

        window.addEventListener('resize', () => this.resize());

        this.initEvents();
        this.initFirebase();
    }

    private resize() {
        const rect = this.canvas.parentElement?.getBoundingClientRect();
        if (rect) {
            this.canvas.width = rect.width;
            this.canvas.height = rect.height - 60; // Subtract controls height
        }
        this.redraw();
    }

    private initEvents() {
        const colorInput = document.getElementById('chalk-color') as HTMLInputElement;
        const widthInput = document.getElementById('chalk-width') as HTMLInputElement;
        const clearBtn = document.getElementById('clear-chalkboard');

        colorInput.addEventListener('change', () => this.currentColor = colorInput.value);
        widthInput.addEventListener('change', () => this.currentWidth = parseInt(widthInput.value));
        clearBtn?.addEventListener('click', () => {
            showConfirmModal("Clear the entire board? This will delete everyone's drawings!", () => {
                clearChalkboard();
            });
        });

        this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        this.canvas.addEventListener('mousemove', (e) => this.draw(e));
        this.canvas.addEventListener('mouseup', () => this.stopDrawing());
        this.canvas.addEventListener('mouseleave', () => this.stopDrawing());

        // Touch support
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            this.startDrawing(touch as any);
        });
        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            this.draw(touch as any);
        });
        this.canvas.addEventListener('touchend', () => this.stopDrawing());
    }

    private initFirebase() {
        subscribeToChalkboard((lines) => {
            this.allLines = lines;
            this.redraw();
        });
    }

    private getMousePos(e: MouseEvent | Touch) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left),
            y: (e.clientY - rect.top)
        };
    }

    private startDrawing(e: MouseEvent | Touch) {
        this.isDrawing = true;
        const pos = this.getMousePos(e);
        this.currentPoints = [pos];
        
        this.ctx.beginPath();
        this.ctx.moveTo(pos.x, pos.y);
        this.ctx.strokeStyle = this.currentColor;
        this.ctx.lineWidth = this.currentWidth;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        
        // Add neon glow
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = this.currentColor;
    }

    private draw(e: MouseEvent | Touch) {
        if (!this.isDrawing) return;
        const pos = this.getMousePos(e);
        this.currentPoints.push(pos);

        this.ctx.lineTo(pos.x, pos.y);
        this.ctx.stroke();
    }

    private async stopDrawing() {
        if (!this.isDrawing) return;
        this.isDrawing = false;

        const user = auth.currentUser;
        if (user && this.currentPoints.length > 1) {
            await addChalkLine({
                userId: user.uid,
                color: this.currentColor,
                width: this.currentWidth,
                points: this.currentPoints
            });
        }
        this.currentPoints = [];
    }

    private redraw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.allLines.forEach(line => {
            if (line.points.length < 2) return;

            this.ctx.beginPath();
            this.ctx.moveTo(line.points[0].x, line.points[0].y);
            
            this.ctx.strokeStyle = line.color;
            this.ctx.lineWidth = line.width;
            this.ctx.lineCap = 'round';
            this.ctx.lineJoin = 'round';
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = line.color;

            for (let i = 1; i < line.points.length; i++) {
                this.ctx.lineTo(line.points[i].x, line.points[i].y);
            }
            this.ctx.stroke();
        });
        
        this.ctx.shadowBlur = 0; // Reset for next draw
    }
}
