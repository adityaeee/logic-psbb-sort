"use strict";

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askQuestion = (question) => {
    return new Promise((resolve) => rl.question(question, resolve));
};

const getFamiliesData = async () => {
    let families = {};

    const familyCount = await askQuestion("Input the number of families: ");
    families.n = parseInt(familyCount);

    const membersInput = await askQuestion(
        "Input the number of members in the family (separated by a space): "
    );
    families.members = membersInput.split(" ").map(Number);

    rl.close();

    return families;
};

const busRequired = async () => {
    try {
        let families = await getFamiliesData();
        if (families.n !== families.members.length) {
            console.log("Input must be equal with count of family");
            return;
        }
        let car = 0;

        let arr = [];
        let tempMembers = [...families.members];

        // sorting data array
        for (let i in tempMembers) {
            let max = 0;
            let maxIndex = -1;

            for (let j = 0; j < tempMembers.length; j++) {
                if (tempMembers[j] > max) {
                    max = tempMembers[j];
                    maxIndex = j;
                }
            }

            if (maxIndex !== -1) {
                arr.push(max);
                tempMembers[maxIndex] = 0;
            }
        }
        // console.log(arr);

        // fulfill bus
        let i = 0;
        while (i < arr.length) {
            if (arr[i] === 4) {
                car++;
                i++;
            } else {
                let found = false;
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i] + arr[j] <= 4) {
                        car++;
                        arr.splice(j, 1);
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    car++;
                }
                i++;
            }
        }
        console.log(`Minimum bus required is : ${car}`);
    } catch (error) {
        console.error("Error:", error);
    }
};

busRequired();
