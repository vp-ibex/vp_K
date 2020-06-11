var shuffleSequence = seq("intro",  followEachWith("question", rshuffle("control", "exp", "filler")));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [

    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],


        // Two "real" (i.e. non-filler) self-paced reading items with corresponding acceptability judgment items.
    // There are two conditions.
    //


["filler" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Дикие розы шипы раскинули, <br> Манят своим ароматом, <br> Горе тому, кто повергнут в уныние <br> И не окинет их взглядом! <br>  </p>",
                               as: ["следующий текст"]}],


["control" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Обезображена, поругана,  <br> Чужой становится земля,  <br> А там, внизу, дрожат испуганно <br> Огни домов и корабля. <br>  <br></p>",
                               as: ["следующий текст"]}],


["filler" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Тает лёд на речке бурной, <br> Греет солнца свет, <br> И сугроб водою мутной <br> Убежит во след. </p>",
                               as: ["следующий текст"]}],


["exp" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Со свечой поднимаюсь в подвал. <br> В нём я часто и прежде бывал <br> при недвижимом ламповом свете. <br> Только лопнул волнистый вольфрам, <br> и волнуется тьма по углам — <br> у неё я давно на примете.  <br>  </p>",
                               as: ["следующий текст"]}],



["control" ,   "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Где ласковый нажим чугунного графита <br> ограду начертил и стройный ряд дерев,  <br> стоят два всадника ― маркграф и маркграфиня, <br> пространство трех веков воздушно одолев.  <br>  </p>",
                               as: ["следующий текст"]}],



["filler" ,   "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Сумей сквозь тучи солнце разглядеть, <br> В дожде сумей увидеть очищенье, <br> Не дай душе уныньем заболеть… <br> Лекарство в мире зла одно — прощенье. <br> </p>",
                               as: ["следующий текст"]}],



["control" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Даже через тучи солнце светит, <br> Золотом лучей издалека. <br> И пускай ревёт в порывах ветер! <br> Что с того, что хмуры облака? <br>  </p>",
                               as: ["следующий текст"]}],


["filler" ,   "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> За решеткой в голубом <br> Быстро ласточки скользили. <br> Коротал я время сном <br> В желтых клубах душной пыли.  <br>  </p>",
                               as: ["следующий текст"]}],



["exp" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Ветки с листьев опадают. <br> Лить дожди не устают. <br> Улетают птичьи стаи, <br> направляются на юг. <br>  </p>",
                               as: ["следующий текст"]}],



["control" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Через поле я иду <br> У колосьев на виду. <br> И спускаюсь я в овраг, <br> Он не друг мне — он мой враг. <br>  </p>",
                               as: ["следующий текст"]}],


["filler" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Её глаза — как два тумана, <br> Полуулыбка, полуплач, <br> Её глаза — как два обмана, <br> Покрытых мглою неудач. <br>  </p>",
                               as: ["следующий текст"]}],


["exp" ,   "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Три века ― нынешний и прежний ― <br> Горды соседством и собой: <br> Антенна рядом со скворешней <br> Над подмосковною избой.  <br> </p>",
                               as: ["следующий текст"]}],


["filler" ,   "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Твои глаза так были близко, <br> Так хрупок шум твоих волос. <br> Бег мерный месячного диска <br> Кропил нас мглой безвлажных рос. <br> </p>",
                               as: ["следующий текст"]}],


["filler" ,   "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Сирени бледные дождем к земле прибиты… <br> Замолкла песня соловья; <br> Немолчно говор слышится сердитый <br> Разлитого ручья.  <br>  </p>",
                               as: ["следующий текст"]}],


["exp" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> В ответ Морозец пошалил – <br> (Вот молодец-проказник!) — <br> Он иней травкою покрыл, <br> Нам не испортил праздник! <br>  </p>",
                               as: ["следующий текст"]}],


["filler" ,  "Question", {hasCorrect: false, randomOrder: false,
                              q: "<p align=left> Люблю я этот старый сад, <br> Он мил, как мгла воспоминанья. <br> С тоской впиваю аромат <br> Его осеннего дыханья. <br> </p>",
                               as: ["следующий текст"]}],


   ["question", "Question", {hasCorrect: false, randomOrder: false,
                              q: "Прочитанный мною отрывок стихотворения созвучен моему текущему эмоциональному состоянию.",
                               as: ["да",
                                   "нет",
                                   "затрудняюсь ответить"]}],
    
  ];  
    //
    // 10 self-paced-reading filler sentences.
    //

   
