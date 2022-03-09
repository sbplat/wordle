const START_DATE = new Date(2021, 5, 19, 0, 0, 0, 0),
    MS_PER_DAY = 24 * 60 * 60 * 1000;

let selectedDate = new Date();
selectedDate.setHours(0, 0, 0, 0);

const daysDifference = (dateFinal = selectedDate, dateInitial = START_DATE) => Math.floor(Math.abs((dateFinal - dateInitial) / MS_PER_DAY));

const getAnswerFromDate = (date = selectedDate) => WORD_LIST[daysDifference(date, START_DATE) % WORD_LIST.length];

const addDays = (date = START_DATE, days = 0) => {
    let newDate = new Date(START_DATE);
    newDate.setDate(date.getDate() + days);
    return newDate;
}

const getDateFromWord = (word) => {
    const index = WORD_LIST.indexOf(word.toLowerCase());
    return index == -1 ? undefined : addDays(START_DATE, index);
};

const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

let spoilerHidden = true,
    answer = getAnswerFromDate();

const updateDate = (date = selectedDate) => $("#datetext").text(date.toLocaleDateString("en-US", dateOptions));

const updateSpoiler = (show = spoilerHidden, word = answer) => $("#word").text(show ? "Click to reveal" : word);

$(document).ready(() => {
    console.log("document ready");
    updateDate();
    updateSpoiler();

    $("#spoiler").click(() => {
        spoilerHidden = !spoilerHidden;
        updateDate();
        updateSpoiler();
    });

    $("#dateinput").on("change", () => {
        const [year, month, day] = $("#dateinput").val().split("-").map(Number);
        selectedDate = new Date(year, month - 1, day, 0, 0, 0, 0);
        answer = getAnswerFromDate(selectedDate);
        updateDate();
        spoilerHidden = true;
        updateSpoiler();
    });

    $("#wordinput").on("change", () => {
        const inputWord = $("#wordinput").val();

        if (inputWord.length == 0) {
            $("#worddate").text("Enter a word to view the date for it");

        } else if (inputWord.length != 5) {
            $("#worddate").text("Word must be exactly 5 letters long");

        } else {
            const wordDate = getDateFromWord(inputWord);

            if (wordDate) {
                $("#worddate").text(wordDate.toLocaleDateString());

            } else {
                $("#worddate").text("Word is not in the word list");
            }
        }
    })
});
