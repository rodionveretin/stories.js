interface Story {
    id: string;
    image: string;
    duration?: number;
}
export declare class StoryPlayer {
    private stories;
    private currentIndex;
    private container;
    private timer;
    constructor(containerId: string);
    addStories(stories: Story[]): void;
    start(): void;
    private showStory;
    private nextStory;
    stop(): void;
}
export {};
