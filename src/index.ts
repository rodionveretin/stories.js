interface Story {
 id: string;
 image: string;
 duration?: number;
}

export class StoryPlayer {
 private stories: Story[] = [];
 private currentIndex = 0;
 private container: HTMLElement;
 private timer: number | null = null;

 constructor(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) throw new Error('Container not found');
  this.container = container;
 }

 addStories(stories: Story[]) {
  this.stories = stories;
 }

 start() {
  if (this.stories.length === 0) return;
  this.showStory(this.currentIndex);
 }

 private showStory(index: number) {
  if (index >= this.stories.length) return;
  const story = this.stories[index];
  this.container.innerHTML = `<img src="${story.image}" style="width: 100%; height: 100%;" />`;
  this.timer = setTimeout(() => this.nextStory(), story.duration || 3000);
 }

 private nextStory() {
  this.currentIndex++;
  if (this.currentIndex < this.stories.length) {
   this.showStory(this.currentIndex);
  } else {
   this.stop();
  }
 }

 stop() {
  if (this.timer) clearTimeout(this.timer);
  this.currentIndex = 0;
 }
}
