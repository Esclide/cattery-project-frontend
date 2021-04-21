import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../../../../core/interfaces/advertisement";

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss']
})
export class AdvertisementsComponent implements OnInit {

  constructor() { }

  advertisements: Advertisement[] = [
    {
      "id": 10,
      "type": "sale",
      "level": "general",
      "title": "Продам мужа",
      "description": "Продам мужа, недорого. Зовут Вячеславом, 31 год. Любит рыбалку, для тех кто не любит чистить рыбу, бонус: рыба к рыбалке не прилагается. Ест все, зарабатывает прилично, на алкоголь и сигареты не тратится, только на рыбалку. Положительный, неприхотлив, в быту совершенно незаметен. О том, что вы жена Вячеслава, вы вспомните, когда он наберет кредитов и наделает долгов и у вас придет время зарплаты, с которой вы все оплатите. В целом симпатичный, высокий, спокойный.",
      "price": 2000,
      "country": "8aE5GEd",
      "city": "IKzqcKO",
      "creationDate": "2021-02-28T14:05:18.710Z",
      "cats": [
        {
          "id": 43,
          "name": "Cat name Twf0oqm",
          "title": "Cat title VMLH22A",
          "gender": "male",
          "color": "Cat color QiMR0LH",
          "birthDate": "2021-02-28T17:05:26.136Z",
          "abilityToReproduce": true,
          "description": null,
          "isAlive": true,
          "breed": {
            "id": 46,
            "name": "Breed name oiuHdBP",
            "description": "Breed description yt51ISV7eUk2RH4",
            "image": "default"
          },
          "attachments": []
        }
      ],
      "creator": {
        "id": 60,
        "email": "knvOERNf@yandex.ru",
        "username": "UsernameTL1dfgi",
        "firstName": "First nameF9GNvJu",
        "middleName": null,
        "lastName": "Last nameVIluwqw",
        "birthDate": "2021-02-28T17:05:26.268Z",
        "registrationDate": "2021-02-28T14:05:18.711Z",
        "phone": null,
        "country": null,
        "city": null,
        "image": "default",
      },
      "attachments": [
        {
          "id": 26,
          "path": "7lMr70LE1I",
          "isMainPhoto": false
        },
        {
          "id": 27,
          "path": "odL0Wzv3RW",
          "isMainPhoto": false
        },
        {
          "id": 28,
          "path": "UkNXWr5mgS",
          "isMainPhoto": false
        },
        {
          "id": 29,
          "path": "v7exhsyUGS",
          "isMainPhoto": false
        },
        {
          "id": 30,
          "path": "iOWid41gmz",
          "isMainPhoto": false
        }
      ]
    },
    {
      "id": 11,
      "type": "sale",
      "level": "general",
      "title": "Продам жену",
      "description": "В хорошем состоянии. Регистрация: 1996г. Объем груди: 2л. Мощность: 100Дб. Пробег по магазинам: 100000км. Цвет: блондинка. Лицо тонировано. Заносит на поворотах. Без тормозов. Дополнительно: комплект шипованной резины",
      "price": 2000,
      "country": "RYjMmsx",
      "city": "FsxO0tl",
      "creationDate": "2021-02-28T14:05:18.710Z",
      "cats": [
        {
          "id": 45,
          "name": "Cat name 8x9ELM2",
          "title": "Cat title NeoAD1X",
          "gender": "female",
          "color": "Cat color 0HL1tS3",
          "birthDate": "2021-02-28T17:08:08.895Z",
          "abilityToReproduce": true,
          "description": null,
          "isAlive": true,
          "breed": {
            "id": 48,
            "name": "Breed name wSjTx75",
            "description": "Breed description hCe5sQHf1ZsPT0r",
            "image": "default"
          },
          "attachments": []
        }
      ],
      "creator": {
        "id": 64,
        "email": "UXLRHmJq@yandex.ru",
        "username": "UsernamejBZxRxy",
        "firstName": "First nameekWWpG1",
        "middleName": null,
        "lastName": "Last nameXSw3rYk",
        "birthDate": "2021-02-28T17:08:09.026Z",
        "registrationDate": "2021-02-28T14:05:18.711Z",
        "phone": null,
        "country": null,
        "city": null,
        "image": "default",
      },
      "attachments": [
        {
          "id": 31,
          "path": "XnqP6oiNKj",
          "isMainPhoto": false
        },
        {
          "id": 32,
          "path": "TzbeuGiGee",
          "isMainPhoto": false
        },
        {
          "id": 33,
          "path": "n2zRcudxmk",
          "isMainPhoto": false
        },
        {
          "id": 34,
          "path": "KZLANjT88P",
          "isMainPhoto": false
        },
        {
          "id": 35,
          "path": "iYa4v2eL04",
          "isMainPhoto": true
        }
      ]
    },
  ];


  ngOnInit(): void {
    console.log(this.advertisements)

  }

}
