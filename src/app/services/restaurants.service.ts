import { Injectable } from '@angular/core';

@Injectable()
export class Restaurants {

  constructor() { }

  locations = [
    {
      id: 1,
      name: 'Raffy Terrace Bar',
      desc:
        'Raffy for most of you is an association for something delicious. Whether it is ice cream on the showcases all over the country or the dishes in our restaurants we always try not to disappoint you. Raffy for one year became an emblematic place in the center of Sofia, and only because he listens daily to the needs of his guests. The pleasant environment, the good food and service, the constant renovation of the interior and the menu and all at an affordable price quickly won the sympathy of Sofia residents. Now we are introducing our new Raffy food & music project. Meals are served until 22:30 in the evening, and from the morning you can have a cup of coffee on the panoramic terrace above Vitoshka. A great place for a party, and you already know our handwriting. Always the best for the best.',
      photo: '../../assets/restaurants/raffy.jpg'
    },
    {
      id: 2,
      name: 'Spaghetti Company',
      desc:
        'Founded in 1999, Spaghetti Company has become established as an oasis of fine Italian fare. The restaurant has a unique atmosphere, combining modern design and classic elements. We are dedicated to combining the fine traditions of Italian cuisine and Bulgarian hospitality. Behind the scenes is chef Marco Luchiari, our Italian food expert and advisor. Twice a year he creates delicious additions to the main menu, providing our guests with new and inspiring offerings from the Italian kitchen. All our main products and ingredients have an authentic Italian origin. You are sure to love the experience of superb service and a masterful Italian menu in a trendy setting. A hot spot for lunch and dinner, Spaghetti Company is a not to be missed venue in Sofia.',
      photo: '../../assets/restaurants/spaghettikitchen.jpg'
    },
    {
      id: 3,
      name: 'La Bocca',
      desc:
        'La Bocca pizzeria was born of our passion for good nutrition - an unique product represented by a simple and stylish concept. We offer three basic high quality products - ITALIAN PIZZA, FRESH PASTA, FRESH BIG SALADS. Our kitchen is opened to customers and everything is prepared in front of them - one of the reasons we are so attractive. Pizza dough is made every day. With the help of our Italian partners who deliver flour from Italy especially for us we have achieved a perfect harmony between the ingredients. We use high quality Italian products to garnish the pizzas and the vegetables in our salads are the best on the market.',
      photo: '../../assets/restaurants/labocca.jpg'
    },
    {
      id: 4,
      name: 'BMS Cuisine',
      desc:
        '"BMS Bulgarian Cuisine" is the largest chain in Bulgaria offering cooked specialties from traditional Bulgarian cuisine. We are among the first in the country to focus our efforts and activities on healthy eating. Every day we take care of our clients to taste delicious, fresh, freshly prepared soups, salads, meat and unsweetened specialties, trimmings, sauces, desserts, soft drinks and low-alcohol drinks. With us you will always be served politely. With our positive and friendly attitude, our employees will make you feel comfortable and enjoyable.',
      photo: '../../assets/restaurants/bms.jpg'
    },
    {
      id: 5,
      name: 'Nordsee',
      desc:
        'Nordsee is a German fast-food restaurant chain specialising in seafood. In addition to selling raw and smoked seafood, the company also sells a wide variety of meals and products prepared from seafood such as Fischbrötchen (fish sandwiches), salads, and canned seafood. The company formerly supplied its own seafood but has since sold the fishery. ',
      photo: '../../assets/restaurants/nordsee.jpg'
    },
    {
      id: 6,
      name: 'Casavino',
      desc:
        'The concept of CASAVINO is to be close to the customer, but also to trade at wholesale prices. In stores in the chain you get a discount when buying a "wine box" equal to 6 (or more) the same or different bottles of wine and / or spirits of your choice. So every bottle can be bought as part of a mixed carton at a better price.',
      photo: '../../assets/restaurants/casavino.jpg'
    }
  ];

  selectedLocation = {};

  getSelectedLocation() {
    return this.selectedLocation;
  }

  setSelectedLocation(location) {
    this.selectedLocation = location;
  }

  // Reserve your table
  // SelectLocation
  reservedRestaurant = {};

  getReservedRestaurant() {
    return this.reservedRestaurant;
  }

  setReservedRestaurant(location) {
    this.reservedRestaurant = location;
  }
}
