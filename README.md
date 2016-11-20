# Transport Kharkiv

## Результат обробки даних
### Основа для даних
За основу були взяті дані з сайту *[danimist.org.ua](https://data.danimist.org.ua/dataset/eec9e685-74b4-4efc-892a-1b39ef6ec045/resource/e1f37ff6-606f-4f0f-a4d6-67278957e38a/download/routestrolleybustramkharkiv.csv)*, які були конвертовані у формат JSON.
### Подальша обробка
Отримавши дані у зручному для нас форматі, ми написали парсер, котрий приймав на вхід початкові дані такого формату
![null](https://pp.vk.me/c626531/v626531422/43cd1/01FbeJjfvSA.jpg)
```
"routes_way": 
        "Розворотне кільце «Салтівське» – просп. Тракторобудівників – просп. Московський – Розворотне кільце «Південно-Східне»"
```

## Результат розробки
### Інтерактивний прототип
[Посилання на інтерактивний прототип](https://marvelapp.com/1g8f37d)

### Мобільний додаток
[Посилання на мобільний додаток]()

### Веб-додаток
[Посилання на веб-додаток](https://github.com/sbiliaiev/transport-kharkiv)

### Обґрунтування проблеми із даними
На даний момент наш прототип обмежений у використанні графіків руху громадського транспорту. На жаль у відкритих джерелах (ні у запропонованій базі даних, ні у сервісах гугл, чи джерелах, що належать до юрисдикції міської влади) немає актуальної інформації, щодо конкретного часу відправлення від зупинок, та кількості одиниць, що обслуговують маршрути за різних умов (година дня, день тижня, варіанти руху на випадок передбачених, або не передбачуваних перешкод у русі). 
Таким чином, зараз ми намагаємося здобути цю інформацію двома паралельними шляхами:
- Юридичний: нами було подано два інформаційні запити, стосовно актуальних графіків руху трамваїв та троллейбусів.  Однак мотивованої відповіді ми не отримали, у результаті чого зараз ми формуємо позов для отримання цих даних.
- Другий спосіб передбачає отримання данних на паперових носіях від тих хто має їх у наявності. Причиною такого кроку є бажання команди зробити робочий додаток, навіть якщо офіційні предстваники підприємства "Міськелектротранссервіс" будуть затягувати свої дії.
