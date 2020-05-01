export const STAGE_WIDTH = 14;
export const STAGE_HEIGHT = 22;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
