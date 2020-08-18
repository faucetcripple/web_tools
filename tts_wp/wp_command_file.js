let robot_commands = {
    air: {
        horn: function () {
            document.ME.nextVoice();
            document.ME.speak(`honk!`);
            document.ME.nextVoice();
            document.ME.speak(`honk!`);
            document.ME.nextVoice();
            document.ME.speak(`honk!`);
            document.ME.nextVoice();
            document.ME.speak(`honk!`);
            document.ME.nextVoice();
            document.ME.speak(`honk!`);
            document.ME.nextVoice();
            document.ME.speak(`honk!`);
            document.ME.nextVoice();
            document.ME.speak(`honk!`);
            document.ME.nextVoice();
            document.ME.speak(`honk!`);
            document.ME.nextVoice();
            document.ME.speak(`honk!`);
            document.ME.nextVoice();
            document.ME.speak(`honk!`);
            document.ME.nextVoice();
            document.ME.speak(`honk!`);
            document.ME.nextVoice();
            document.ME.speak(`honk!`);
            document.ME.nextVoice();
            document.ME.speak(`honk!`);
            document.ME.lastVoice();
            document.ME.lastVoice();
            document.ME.lastVoice();
            document.ME.lastVoice();
            document.ME.lastVoice();
            document.ME.lastVoice();
            document.ME.lastVoice();
            document.ME.lastVoice();
            document.ME.lastVoice();
            document.ME.lastVoice();
            document.ME.lastVoice();
            document.ME.lastVoice();
            document.ME.lastVoice();
        },
    },
    read: {
        all: {
            chat: function () {
                console.log('trigger read all chat');
            }
        }
    },
    you: {
        are: {
            gay: function () {
                console.log('Yup You ARE Gay');
                document.ME.nextVoice();
                document.ME.nextVoice();
                document.ME.nextVoice();
                document.ME.speak(`no you`);
                document.ME.lastVoice();
                document.ME.lastVoice();
                document.ME.lastVoice();

            }
        }
    },
    show: {
        time: function () {
            console.log('hook time toggle command here');
        },
        face: function () {
            console.log('hook face toggle command here');
        }
    },
    showtime: {

    },
    look: {
        left: undefined,
        right: undefined,
        up: undefined,
        down: undefined,
        pp: undefined,
    },
    what: {
        is: {
            life: function () {
                document.ME.nextVoice();
                document.ME.nextVoice();
                document.ME.speak(`life is gay`);
                document.ME.lastVoice();
                document.ME.lastVoice();
                console.log('LIFE');
            }
        }
    },
    will: {
        I: {
            dream: function () {
                document.ME.nextVoice();
                document.ME.nextVoice();
                document.ME.nextVoice();
                document.ME.speak(`of gay sex`);
                document.ME.lastVoice();
                document.ME.lastVoice();
                document.ME.lastVoice();
            },
        }
    },
}
