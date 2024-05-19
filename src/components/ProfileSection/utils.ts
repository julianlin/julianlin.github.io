export const createVideoItem = (text: string, action: () => void) => {
  return {
    text,
    action,
    type: 'ACTION' as const,
  };
};
