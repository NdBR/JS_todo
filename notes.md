# to do

## voorbereiding

- clone de eigen rest api repository, zodat deze op mijn eigen comp staat
- volg de readme instructie
- lees hoe je de repository gebruikt
- gebruik postman en stuur een get request naar de url en controleer dit
- schrijf een stukje code om dezelfde get request te sturen en console log het resultaat zodat je daart ook de lege array terug ziet komen ( async await!)
- Om een eerste item in je endpoint te krijgen kun je een POST request sturen naar de URL, doe dit eerst met Postman en vervolgens ook vanuit JavaScript. Stuur als body een JavaScript object mee met een omschrijving en een "done" key die op "false" staat. Zie dit voorbeeld:

```js 
const data = {description: "buy oatmeal", done: false};
fetch(baseUrl, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
      "Content-Type": "application/json",
  },
});
```

Check dan met GET wat er in het endpoint staat
Je zal erachter komen dat het endpoint werkt met hashes die het zelf genereert van jouw data elke keer als je een request doet. Je data zal er alsvolgt uit komen te zien:

```js
{
  "_id": "skdjfhskdjfhsdfk",
  "description": "buy oatmilk",
  "done": false,
 "_createdOn": "2020-10-20et etc"
}
```

- Zoals je ziet krijg je gratis een id mee van de endpoint, die heb je later nodig om te verwijzen naar die specifieke taak.

## tot hier beginnen en dan opdracht verder lezen!!!!


## idee oplossing
- array maken van getRequest objechten. 
- hier een list van maken om in de dom te zetten
- functie display in dom

- click eventlistner plaatsen op li's om indexwaarde van li terug te krijgen
- via index waardes kan je id van targeted li element opvragen
- functie maken van Get id li element om meerdere dingen mee te kunnen doen
- vervolgens id gebruiken om bij bij delete te verwijderen ui de db / misschien ook uit dom list zonder opnieuw de db aan te roepen? dit voor de user interface snelheid

- eerst de dom helemaal bouwen en regelen? dan fetches er los aan hangen voor verwerken van gegevens in db, zo niet te hoeven wachten op de await functies
