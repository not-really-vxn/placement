//
// Организационный отдел ("org") - организация мероприятий 
// Административный отдел ("adm") - работа с документами
// Отдел дизайна ("dsg") — отвечает за дизайн
// Отдел внешних связей ("com") — занимается взаимодействием с приглашенными спикерами и другими клубами
// Научный отдел ("rnd") — занимается кураторством тем научных статей клуба, подготавливает темы и материал для мероприятий.
// SMM отдел ("smm") — ведёт соц. Сети клуба и занимается маркетингом
// Кадровый отдел ("hrp") — проводит набор и аудит членов клуба
//
questions = [
    {
        "question": "Как вы относитесь к планированию и организации мероприятий?",
        "effect": {"org": 10, "adm": 0, "dsg": 0, "com": 5, "rnd": 0, "smm": 5, "hrp": 0}
    },
    {
        "question": "Вам нравится работать с документами и следить за порядком в бумагах?",
        "effect": {"org": 5, "adm": 10, "dsg": 0, "com": 0, "rnd": 0, "smm": 0, "hrp": 5}
    },
    {
        "question": "Вы увлечены дизайном и креативными проектами?",
        "effect": {"org": 5, "adm": 0, "dsg": 10, "com": 5, "rnd": 5, "smm": 5, "hrp": 0}
    },
    {
        "question": "Нравится ли вам общаться с новыми людьми и представителями других организаций?",
        "effect": {"org": 5, "adm": 0, "dsg": -5, "com": 10, "rnd": -5, "smm": 0, "hrp": 5}
    },
    {
        "question": "Вы интересуетесь научными темами и готовы углубляться в исследования?",
        "effect": {"org": -5, "adm": -5, "dsg": 5, "com": -5, "rnd": 10, "smm": 0, "hrp": 0}
    },
    {
        "question": "Вы считаете себя активным пользователем социальных сетей и любите создавать контент?",
        "effect": {"org": -5, "adm": -10, "dsg": -5, "com": 5, "rnd": -10, "smm": 10, "hrp": 0}
    },
    {
        "question": "Вам нравится проводить собеседования и общаться с кандидатами?",
        "effect": {"org": 5, "adm": -5, "dsg": -10, "com": 5, "rnd": -10, "smm": 5, "hrp": 10}
    },
    {
        "question": "Вы предпочитаете работать в команде над проектами, требующими совместных усилий?",
        "effect": {"org": 10, "adm": 0, "dsg": 5, "com": -5, "rnd": -5, "smm": 5, "hrp": 0}
    },
    {
        "question": "Вам комфортно делать презентации и представлять идеи перед аудиторией?",
        "effect": {"org": 5, "adm": 0, "dsg": 0, "com": 10, "rnd": 0, "smm": 0, "hrp": 0}
    },
    {
        "question": "Вы внимательно относитесь к деталям и соблюдаете дедлайны?",
        "effect": {"org": 0, "adm": 5, "dsg": 9, "com": 0, "rnd": 0, "smm": 0, "hrp": 10}
    },
    {
        "question": "Вы любите анализировать данные и делать выводы на их основе?",
        "effect": {"org": -5, "adm": 10, "dsg": 0, "com": 0, "rnd": 10, "smm": 0, "hrp": 0}
    },
    {
        "question": "Вы готовы к многозадачности и быстрому реагированию на изменения?",
        "effect": {"org": 0, "adm": 5, "dsg": 0, "com": 0, "rnd": 10, "smm": 5, "hrp": 0}
    },
    {
        "question": "Вам нравится обучать других и делиться своими знаниями?",
        "effect": {"org": 0, "adm": 0, "dsg": 0, "com": 10, "rnd": 5, "smm": 0, "hrp": 0}
    },
    {
        "question": "Вы стремитесь к креативным решениям в рабочих задачах?",
        "effect": {"org": 0, "adm": 0, "dsg": 10, "com": 0, "rnd": 5, "smm": 5, "hrp": 0}
    },
    {
        "question": "Вы готовы брать на себя ответственность за выполнение проектов от начала до конца?",
        "effect": {"org": 10, "adm": 5, "dsg": 0, "com": 0, "rnd": 0, "smm": 0, "hrp": 0}
    }
];
