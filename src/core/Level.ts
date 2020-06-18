type isLevelActive = (position: number) => boolean;

export class Level {
  private readonly _index: number;
  private readonly _color: string;
  private readonly _isActive: isLevelActive;

  constructor(index: number, color: string, isActive: isLevelActive) {
    this._index = index;
    this._color = color;
    this._isActive = isActive;
  }

  get index(): number {
    return this._index;
  }

  get color(): string {
    return this._color;
  }

  isActive(position: number): boolean {
    return this._isActive(position);
  }
}
