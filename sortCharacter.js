"use strict";

const inputan1 = "Sample Case";
const inputan2 = "Next Case";

const sort = (inputan) => {
    const vow = ["a", "i", "u", "e", "o"];
    let vowel = [];
    let consonant = [];

    for (let huruf of inputan) {
        for (let vocal of vow) {
            if (huruf.toLowerCase() == vocal.toLowerCase()) {
                if (vowel.length == 0) {
                    vowel.push(huruf.toLowerCase());
                    huruf = " ";
                } else {
                    let i = 0;
                    for (; i < vowel.length; i++) {
                        if (vowel[i] == huruf) {
                            vowel[i + 1] = huruf.toLowerCase();
                            break;
                        }
                    }
                    vowel[i + 1] = huruf.toLowerCase();
                    huruf = " ";
                }
            }
        }
        if (huruf != " ") {
            consonant.push(huruf.toLowerCase());
        }
    }

    console.log("🚀 ~ sort ~ vowel:", vowel.toString());
    console.log("🚀 ~ sort ~ consonant:", consonant.toString());
};

sort(inputan1);
sort(inputan2);
