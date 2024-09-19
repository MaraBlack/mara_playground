export class Item {
  private directions: Record<number, string>;
  private classNames: string[];
  private element: HTMLElement;

  constructor(
    element: HTMLElement,
    directions: Record<number, string>,
    classNames: string[]
  ) {
    this.element = element;
    this.directions = directions;
    this.classNames = classNames;

    this.element.addEventListener('mouseover', (ev) => this.update(ev, 'in'));
    this.element.addEventListener('mouseout', (ev) => this.update(ev, 'out'));
  }

  update(ev: MouseEvent, prefix: string) {
    const classList = Array.from(this.element.classList);
    this.element.classList.remove(...classList);

    const directionKey = this.getDirectionKey(ev, this.element);
    this.element.classList.add(`${prefix}-${this.directions[directionKey]}`);
  }

  /* 
      Math.round(...): Rounds the result to the nearest integer.
      Math.atan2(y, x): Computes the angle (in radians) between the positive x-axis and the point (x, y) in a Cartesian plane.
      1.57079633: This is approximately π/2 (90 degrees) in radians.
      + 5: Adjusts the angle to fit the desired direction mapping. This is a part of the normalization process to ensure that angles are correctly mapped to the direction indices.
      % 4: Modulus operation to wrap the result into a range of 0 to 3.
    */
  getDirectionKey(ev: MouseEvent, node: HTMLElement): number {
    const { width, height, top, left } = node.getBoundingClientRect();
    const l = ev.pageX - (left + window.pageXOffset);
    const t = ev.pageY - (top + window.pageYOffset);
    const x = l - (width / 2) * (width > height ? height / width : 1);
    const y = t - (height / 2) * (height > width ? width / height : 1);
    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  }
}
