import { useEffect } from 'react';
import * as Phaser from 'phaser';
import { Scene1 } from '../../scenes/Scene1';
import { Scene2 } from '../../scenes/Scene2';

const Game = () => {
    useEffect(() => {
        // Create a new Phaser.Game instance
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            backgroundColor: 0xff000,
            scene: [Scene1, Scene2],
            callbacks: {
                postBoot: (game) => {
                    // Center the canvas after the game boots
                    const canvas = game.canvas;

                    canvas.style.display = 'block';
                    canvas.style.margin = 'auto';

                    window.addEventListener('resize', () => {
                        // Recenter the canvas on window resize
                        canvas.style.margin = 'auto';
                    });
                },
            },
        };

        const game = new Phaser.Game(config);

        function create() {
            const canvas = game.canvas;

            // Center the canvas horizontally and vertically
            canvas.style.display = 'block';
            canvas.style.margin = 'auto';
        }

        // Set up Phaser event listeners
        game.events.on('resize', () => {
            // Recenter the canvas when the game is resized
            create();
        });

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div className="phaser-game-container"></div>;
};

export default Game;
