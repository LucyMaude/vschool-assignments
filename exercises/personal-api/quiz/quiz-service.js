angular.module("personalApp");
app.service("quizService", function () {

    this.one = {
        ask: "How do you feel about the Iron Throne?",
        answerOne: "The Iron Throne is mine by rights",
        answerTwo: "I couldn't care less about it",
        class: "model-one"
    };
    this.eddard = {
        name: "Lord Eddard Stark",
        explanation: "Like Ned Stark you want nothing to do with the Game of Thrones. Also like Ned Stark, Boromir, and any other character played by Sean Bean, your time in this fantasy world has come to an end very quickly",
        photo: "https://s28.postimg.org/5dp829x19/NED.png"
    };


    this.two = {
        ask: "What is more important: Family or Honor?",
        answerOne: "Family",
        answerTwo: "Honor",
        class: "model-two"
    };
    this.cat = {
        name: "Lady Catelyn Stark",
        explanation: "Cat Stark is one of the many characters who dies early on because they would rather fight to earn respect than take care of their family. Just look what happened to Rob...",
        photo: "http://wetpaint.com/wp-content/uploads/2013/6/w310_gameofthrones1382-1370367772.jpg"
    };

    this.three = {
        ask: "You're walking in the woods and you see a pretty girl. What do you do?",
        answerOne: "Propose",
        answerTwo: "Set the dogs on her, she's probably an enemy",
        class: "model-three"
    }
    this.ramsay = {
        name: "Ramsay Snow",
        explanation: "You're answer to that question was twisted and not something a Stark would say.",
        photo: "http://www.thefandom.net/wp-content/uploads/2016/04/got-ramsay.jpg"

    };

    this.four = {
        ask: "Winter or Spring?",
        answerOne: "Spring",
        answerTwo: "Winter",
        class: "model-four"
    }
    this.rob = {
        name: "Robb Stark",
        explanation: "Family Man, Lady Killer, King in the North, quick-tempered, honest to a fault, pretty much everything Stark is you.",
        photo: "http://www.tvequals.com/wp-content/uploads/2012/03/RobbStark-550x310.png"
    };

    this.five = {
        ask: "Do you have nightmares?",
        answerOne: "Not really",
        answerTwo: "Yeah sometimes",
        class: "model-five"
    }
    this.rickon = {
        name: "Rickon Stark",
        explanation: "Your entire life is pretty much one giant nightmare starting from spending all day in the crypts of your castle, to living in the woods to escape being slaughtered, to having your best friend (Shaggydog) killed, to then being captured and slain moments before you reach the safety of your brother's arms.",
        photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/05/11/10/rickon-shaggydog-game-of-thrones.png"

    };

    this.six = {
        ask: "You are right",
        answerOne: "Sometimes",
        answerTwo: "Always or Never, there is no inbetween",
        class: "model-six"
    }
    this.bran = {
        name: "Bran Stark",
        explanation: "You are gifted but sometimes you use your gift as an excuse to do whatever you want instead of listening to people who clearly know more than you. You also don't deserve your own photo because you aren't that goodlooking and ruined this man's whole life",
        photo: "https://images.moviepilot.com/images/c_fill,h_273,w_500/t_mp_quality_gif/gi9tgb50e1ipuh5rmc8y/hold-the-door-how-hodor-s-game-of-thrones-reveal-just-brought-time-travel-to-westeros-986747.jpg"
    };

    this.seven = {
        ask: "How are you and your bestie?",
        answerOne: "We are always cool",
        answerTwo: "We are either tighter than sisters, or fiercely competative",
        class: "model-seven"
    }
    this.theon = {
        name: "Theon Greyjoy",
        explanation: "You live your life in your best-friend's shadow and it has given you a complex. You may one day become recognized for who you are, or you might just find someone else's shadow to borrow...like your sister's.",
        photo: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/theon-greyjoy-1920.jpg"
    };

    this.eight = {
        ask: "How often do your talk to your mum?",
        answerOne: "Once a week or so",
        answerTwo: "Almost every day",
        class: "model-eight"
    }
    this.joffrey = {
        name: "Joffrey Baratheon",
        explanation: "You do almost everything (and everyone) your mother says to. It could be good to branch out a bit, especially if your mother is telling you to take the role of a universally hated character. Enjoy this picture of Jack Gleeson with an adorable pug, maybe it will make you feel better about being associated with Joffrey.",
        photo: "http://winteriscoming.net/wp-content/uploads/2015/10/pugkingjoffrey.jpg"
    };

    this.nine = {
        ask: "Are you on facebook?",
        answerOne: "Yes and I love selfies ;) ",
        answerTwo: "No, too much drama",
        class: "model-nine"
    }
    this.arya = {
        name: "No-one, a girl has no name",
        explanation: "You are more wolf than a man. #valarmorghulis",
        photo: "http://winteriscoming.net/wp-content/uploads/2016/02/arya-face-banner-810x631.jpg"
    };

    this.ten = {
        ask: "You are walking into a building and someone is 10 feet behind you. You",
        answerOne: "Let them fend for themselves",
        answerTwo: "Hold the door",
        class: "model-ten"
    }
    this.hodor = {
        name: "Walder",
        explanation: "Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor",
        photo: "http://static1.fjcdn.com/comments/4619866+_8b6f78e310180b977d271526cf09b491.jpg"
    };

    this.eleven = {
        ask: "What's your idea of a great weekend?",
        answerOne: "Going to the country for some nice walking",
        answerTwo: "Going to a music festival",
        class: "model-eleven"
    }
    this.sansa = {
        name: "Sansa Stark",
        explanation: "You love parties, people, and being the best. You are pretty and popular, just don't get married or engaged. Ever. Just stay away from all men that aren't family really.",
        photo: "http://img.usmagazine.com/social/sansa-stark-84e96267-5156-421d-95b7-13bdbe8397da.jpg"
    };

    this.twelve = {
        ask: "You go to the salon and leave with a terrible new look. What do?",
        answerOne: "Freak out, cry for a long time, wear a wig for a while",
        answerTwo: "Rock it.",
        class: "model-twelve"
    }
    this.cesei = {
        name: "Cersei Lannister",
        explanation: "As roll-with-the-punches and tenacious as a girl can be. You could lose everything you've ever loved and would still come out on top. My advice? Give up any bad habits you might have, otherwise they'll be your undoing.",
        photo: "https://www.thesun.co.uk/wp-content/uploads/2017/03/game-of-thrones-promo2-mp4-00_00_49_08-still023.jpg?strip=all&w=960&quality=100"
    };

    this.thirteen = {
        ask: "If you were to play the game of thrones you would",
        answerOne: "Win",
        answerTwo: "Die.... and then Win",
        class: "model-thirteen"
    }
    this.jon = {
        name: "Jon Snow",
        explanation: "Life's dealt you a bad hand. Or so you thought! Keep fighting for what you love and something good might come your way!",
        photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/29/09/jon-snow-game-thrones.jpg"
    };

    this.fourteen = {
        ask: "You stand before a judge and jury. What do you do?",
        answerOne: "Tell the truth! They have no evidence because you don't do anything wrong",
        answerTwo: "Ehhh, what the hell, trial by combat",
        class: "model-fourteen"
    }
    this.tyrion = {
        name: "Tyrion Lannister",
        explanation: "You do what you want, march to the beat of your own drum, and are well trained in the art of the calculated risk. You might have some flaws, but not enough to make the audience hate you. In your own words: Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you.",
        photo: "https://static2.comicvine.com/uploads/original/3/39241/5301535-promo_%28tyrion%29_saison_5_%282%29.jpg"
    };

    this.fifteen = {
        ask: "How do you feel about kids?",
        answerOne: "Maybe one day, but not right now.",
        answerTwo: "I love them! The more the merrier!",
        class: "model-fifteen"
    }
    this.daenerys = {
        name: "Daenerys Stormborn of the House Targaryen of the blood of Old Valyeria, the First of Her Name, the Unburnt, Queen of Meereen, Queen of the Andals and the Rhoynar and the First Men, Khalisee of the Great Grass Sea, Breaker of Chains and Mother of Dragons.",
        explanation: "You are kind and loving...until someone hurts someone you love. Then you turn into a merciless dragon. All the world are your children so long as they are as good and loving as you are. Some might say you are just another one of G.R.R.M's incredibly strong female characters, but there's something special about you. You go girl!",
        photo: "https://www.howtotrainyourdragon.com/images/uploads/humans/_1095/Astrid_Gallery_httyd2_1wm.jpg"
    };

    this.sixteen = {
        ask: "Tell me about high school",
        answerOne: "Where do I start?",
        answerTwo: "You can't make me!",
        class: "model-sixteen"
    }
    this.jaime = {
        name: "Jaime Lannister",
        explanation: "You are that guy. You have a lot of people who want to be friends with you, and even more who want to be you. But if they only knew...",
        photo: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/jamie-lannister-1024.jpg"
    };
    this.brienne = {
        name: "Brienne of Tarth",
        explanation: "You've had a rough time of it with the cool kids and it has made you really stubborn. You are more beautiful than you realize and a true friend. ",
        photo: "https://pbs.twimg.com/profile_images/742764508960153600/84biTbZb.jpg"
    };



    this.arrayOfQuestions = [this.one];
    var self = this;
    this.moveOver = function (input, first, second) {

        var arrayOfPossibilities = [self.one, self.two, self.three, self.four, self.five, self.six, self.seven, self.eight, self.nine, self.ten, self.eleven, self.twelve, self.thirteen, self.fourteen, self.fifteen, self.sixteen];

        var arrayOfResults = [self.eddard, self.cat, self.ramsay, self.rob, self.rickon, self.bran, self.theon, self.joffrey, self.arya, self.hodor, self.sansa, self.cesei, self.jon, self.tyrion, self.daenerys, self.jaime, self.brienne];

        var whereAt = arrayOfPossibilities.indexOf(input);

        if (input.class === "model-sixteen") {
            if (first) {
                console.log("end result")
                self.arrayOfQuestions.pop();
                self.arrayOfQuestions.push(arrayOfResults[whereAt]);
            } else if (second) {
                console.log("end result")
                self.arrayOfQuestions.pop();
                self.arrayOfQuestions.push(arrayOfResults[whereAt + 1]);
            }
        } else {

            if (first) {
                console.log("new question")
                self.arrayOfQuestions.pop();
                self.arrayOfQuestions.push(arrayOfPossibilities[whereAt + 1]);
                console.log(self.arrayOfQuestions);
            } else if (second) {
                console.log("end result")
                self.arrayOfQuestions.pop();
                self.arrayOfQuestions.push(arrayOfResults[whereAt]);
            }
        }
    }


})
