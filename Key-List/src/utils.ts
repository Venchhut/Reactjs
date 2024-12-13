export interface User {
  id: number;
  name: string;
}

export const users = Array(20)
  .fill(0)
  .map((_, index) => {
    return {
      id: index,
      name: `User ${index}`,
    };
  });
