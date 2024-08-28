import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-grid-loading-screen',
  standalone: true,
  imports: [],
  templateUrl: './grid-loading-screen.component.html',
  styleUrl: './grid-loading-screen.component.scss',
})
export class GridLoadingScreenComponent implements AfterViewInit {
  private cellSize = 50; // Size of each cell in pixels
  private gap = 1; // Gap between grid cells in pixels

  private sequenceBlue = [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 1, col: 2 },
    { row: 2, col: 2 },
    { row: 2, col: 1 },
    { row: 2, col: 0 },
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 0, col: 1 },
    { row: 0, col: 0 },
  ];

  private sequenceOrange = [
    { row: 0, col: 0 },
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },
    { row: 1, col: 2 },
    { row: 0, col: 2 },
    { row: 0, col: 1 },
    { row: 0, col: 0 },
  ];

  private sequenceRed = [
    { row: 0, col: 0 },
    { row: 1, col: 0 },
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 1, col: 1 },
    { row: 1, col: 0 },
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 1, col: 2 },
    { row: 0, col: 2 },
    { row: 0, col: 1 },
    { row: 0, col: 0 },
  ];

  ngAfterViewInit() {
    const movingCubeBlue = document.getElementById('moving-cube-blue')!;
    const movingCubeOrange = document.getElementById('moving-cube-orange')!;
    const movingCubeRed = document.getElementById('moving-cube-red')!;

    const grid = document.getElementById('grid')!;

    // Function to calculate the position in pixels based on grid cell
    const getPosition = (row: number, col: number) => {
      return {
        top: row * (this.cellSize + this.gap),
        left: col * (this.cellSize + this.gap) - 50,
      };
    };

    // Function to move the cube to a specific position
    const moveCubeToPosition = (
      cube: HTMLElement,
      row: number,
      col: number
    ) => {
      const { top, left } = getPosition(row, col);
      cube.style.transform = `translate(${left}px, ${top}px)`;
    };

    // Function to animate the sequence
    const animateSequence = (
      sequence: { row: number; col: number }[],
      cube: HTMLElement
    ) => {
      let index = 0;

      const animate = () => {
        if (index < sequence.length) {
          const { row, col } = sequence[index];
          moveCubeToPosition(cube, row, col);
          index++;
          setTimeout(animate, 500); // Move every half second
        } else {
          index = 0; // Reset to the beginning of the sequence
          setTimeout(animate, 500); // Shorter delay between sequences
        }
      };

      animate();
    };

    // Initialize the cubes' positions and start animations
    moveCubeToPosition(
      movingCubeBlue,
      this.sequenceBlue[0].row,
      this.sequenceBlue[0].col
    ); // Initial position for blue cube
    moveCubeToPosition(
      movingCubeOrange,
      this.sequenceOrange[0].row,
      this.sequenceOrange[0].col
    ); // Initial position for orange cube
    moveCubeToPosition(
      movingCubeRed,
      this.sequenceRed[0].row,
      this.sequenceRed[0].col
    ); // Initial position for red cube

    setTimeout(() => {
      animateSequence(this.sequenceBlue, movingCubeBlue); // Start blue cube animation
      animateSequence(this.sequenceOrange, movingCubeOrange); // Start orange cube animation
      animateSequence(this.sequenceRed, movingCubeRed); // Start red cube animation
    }, 1000); // Delay before starting the animations
  }
}
