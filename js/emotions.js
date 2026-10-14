document.addEventListener("DOMContentLoaded", () => {
const emotions = [{"id": 1, "name": "Восторг", "italian": "Eccitazione", "description": "То самое чувство, когда всё случается впервые."}, {"id": 2, "name": "Влюблённость", "italian": "L’amore", "description": "Когда весь вечер — только для вас двоих."}, {"id": 3, "name": "Страсть", "italian": "Passione", "description": "Яркое чувство, которое невозможно спрятать."}, {"id": 4, "name": "Гордость", "italian": "Orgoglio", "description": "За свой путь. За то, что получилось."}, {"id": 5, "name": "Ревность", "italian": "Gelosia", "description": "Когда чувства чуть острее, чем обычно."}, {"id": 6, "name": "Нежность", "italian": "Tenerezza", "description": "Тепло, которое не требует громких слов."}, {"id": 7, "name": "Искренность", "italian": "Sincerità", "description": "Быть собой. Говорить о главном."}, {"id": 8, "name": "Ностальгия", "italian": "Nostalgia", "description": "Вечер, который возвращает к любимым воспоминаниям."}, {"id": 9, "name": "Гармония", "italian": "Armonia", "description": "Когда всё на своём месте. И все свои — рядом."}];
const image = document.getElementById('emotion-image');
if (!image) return;
document.querySelectorAll('[data-emotion]').forEach(button => button.addEventListener('click', () => {
 const emotion = emotions.find(item => item.id === Number(button.dataset.emotion));
 document.querySelectorAll('[data-emotion]').forEach(item => item.setAttribute('aria-pressed',String(item === button)));
 document.getElementById('emotion-italian').textContent = `0${emotion.id} / ${emotion.italian.toUpperCase()}`;
 document.getElementById('emotion-name').textContent = emotion.name;
 document.getElementById('emotion-description').textContent = emotion.description;
 image.src = `/img/cocktails/${emotion.id}.JPG`;
 image.alt = `Оригинальная карта коктейля ${emotion.italian} — ${emotion.name}`;
 const link = document.getElementById('emotion-image-link');
 link.href = `/signaturecocktails/#emotion-${emotion.id}`;
 link.setAttribute('aria-label',`Открыть полную карточку: ${emotion.name}`);
}));
});