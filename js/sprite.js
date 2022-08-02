function createSprite(tagSprite) {
    return sprite = {
        tag: document.querySelector(tagSprite),
        actualFrame: 1,
        lastFrame: 9,

        reset: function () {
            this.tag.className = `sprite frame1`;
            actualFrame = 1;
        },

        isFinished: function () {
            return this.actualFrame == this.lastFrame ? true : false;
        },

        nextFrame: function () {
            this.tag.className = `sprite frame${++this.actualFrame}`;
        }

    }
}