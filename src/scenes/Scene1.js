export class Scene1 extends Phaser.Scene {
    constructor() {
        super('startGame')
    }

    create() {
        this.add.text(20, 20, "Loading game...");

        this.time.delayedCall(3000, () => {
            this.scene.start('playGame');
        });
    }
}