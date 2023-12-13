// GameComponent.js
import { useEffect } from 'react';
import * as Phaser from 'phaser';

const GameComponent = () => {
    useEffect(() => {
        // Create a new Phaser.Game instance
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            scene: {
                preload: preload,
                create: create,
                update: update,
            },
        };

        const game = new Phaser.Game(config);

        function preload() {
            // Load assets here
        }

        function create() {
            // Initialize game objects here
        }

        function update() {
            // Game update logic here
        }

        // Clean up when the component is unmounted
        return () => {
            game.destroy(true);
        };
    }, []);

    return <div className="phaser-game-container">steve</div>;
};

export default GameComponent;
