export class StoryPlayer {
 constructor(container) {
  this.stories = [];
  this.currentIndex = 0;
  this.timer = null;
  const containerElement =
   typeof container === 'string'
    ? document.querySelector(container)
    : container;
  console.log(containerElement);
  if (!containerElement) {
   throw new Error('Container not found');
  }
  this.container = containerElement;
 }
 addStories(stories) {
  this.stories = stories;
 }
 start() {
  if (this.stories.length === 0) return;
  this.showStory(this.currentIndex);
 }
 showStory(index) {
  if (index >= this.stories.length) return;
  const story = this.stories[index];
  this.container.innerHTML = `<img src="${story.image}" style="width: 100%; height: 100%;" />`;
  this.timer = setTimeout(() => this.nextStory(), story.duration || 3000);
 }
 nextStory() {
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
