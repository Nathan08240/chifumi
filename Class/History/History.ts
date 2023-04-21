export class History {
  private history: string[] = [];

  addHistory = (history: string) => {
    this.history.push(history);
  };

  getHistory = (): string[] => {
    return this.history;
  };

  displayHistory = () => {
    this.history.forEach((history) => {
      console.log(history);
    });
  };
}
