import { Injectable } from '@angular/core';

@Injectable()
export class TechService{

    items = [
        {
          id: 1,
          title: 'CAMERAS',
          text: 'Technomarket -30% Technopolis -20% Media Markt -10% TechMart -10% Technika -10%',
          photo: '../../assets/tech/camera.png'
        },
        {
          id: 2,
          title: 'MOBILE',
          text: 'Technika -15% TechMart -20% Media Markt -5% Technopolis -10% Technomarket -20%',
          photo: '../../assets/tech/mobile.png'
        },
        {
          id: 3,
          title: 'LAPTOPS',
          text: 'Technomarket -30% Technopolis -20% Media Markt -10% TechMart -10% Technika -10%',
          photo: '../../assets/tech/laptops.png'
        },
        {
          id: 4,
          title: 'AUDIO',
          text: 'Technika -15%\n TechMart -20%\n Media Markt -5%\n Technopolis -10%\n Technomarket -20%',
          photo: '../../assets/tech/audio.png'
        },
        {
          id: 5,
          title: 'TV',
          text: 'Technomarket -20% Technopolis -10% Media Markt -20% TechMart -10% Technika -30%',
          photo: '../../assets/tech/tv.png'
        }
      ];

      selectedItem = {};

      get getItems() {
        return this.selectedItem;
      }
      
      isActive = false;

      setSelectedItem(item) {
        this.selectedItem = item;
        this.isActive = true;
      }
}