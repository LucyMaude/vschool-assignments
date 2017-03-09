var findMeFriend = [
    {
        firstName: "Rachel",
        lastName: "Maude",
        playsSport: true,
        sportTypes: ["soccer", "croquet"],
        hasDog: true,
        hasKids: false,
        aboutKids: {
            name: "none",
            schoolName: ["none"],
            hasActivity: false,
            activityName: ["none"]
        },
        howMakeFriend: function () {
            if (this.playsSport === true) {
                return ("This person plays sports! Maybe you could try playing " +
                    this.sportTypes.join(", or "));
            }
            if (this.hasDog === true) {
                return ("This person has a dog! Everyone loves dogs! Maybe you should go to the dog park sometime!");
            }
        },
    },
    {
        firstName: "Christine",
        lastName: "England",
        lastName: "England",
        playsSport: false,
        sportTypes: ["none"],
        hasDog: true,
        hasKids: true,
        aboutKids: {
            name: "Louise",
            schoolName: "Old Greenwich Elementary School",
            hasActivity: true,
            activityName: ["crew", "cooking school"]
        },
        howMakeFriend: function () {
            if (this.playsSport === true) {
                return ("This person plays sports! Maybe you could try playing " +
                    this.sportTypes.join(", or "));
            }
            if (this.hasDog === true) {
                return ("This person has a dog! Everyone loves dogs! Maybe you should go to the dog park sometime!");
            }
        },
    },
    {
        firstName: "James",
        lastName: "Maude",
        playsSport: true,
        sportTypes: ["soccer", "cricket", "rugby"],
        hasDog: true,
        hasKids: true,
        aboutKids: [
            {
                name: "Rachel",
                schoolName: "Riverside Elementary School",
                hasActivity: true,
                activityName: ["photography class"]
        },
            {
                name: "Jake",
                schoolName: "Old Greenwich Elementary School",
                hasActivity: false,
                activityName: ["none"]
        },
            {
                name: "Lucy",
                schoolName: "Greenwich High School",
                hasActivity: true,
                activityName: ["debate club"]
        }
            ],
        howMakeFriend: function () {
            if (this.playsSport === true) {
                return ("This person plays sports! Maybe you could try playing " +
                    this.sportTypes.join(", or "));
            }
            if (this.hasDog === true) {
                return ("This person has a dog! Everyone loves dogs! Maybe you should go to the dog park sometime!");
            }
        },
        }
    ];
findMeFriend.push("no other people");
findMeFriend[2].sportTypes.push("polo");

findMeFriend[0].hasJob = true;
findMeFriend[1].hasJob = false;
findMeFriend[2].hasJob = true;