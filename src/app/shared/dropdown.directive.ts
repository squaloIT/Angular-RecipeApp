import { Directive, HostListener, TemplateRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective { //! OVO NIJE STRUCTURAL DIRECTIVE JER NE ODLUCUJE DA LI CE SE NEKI ELEMENT PRIKAZATI ILI NE, ZATO NEMA POTREBE ZA ONOM ZVEZDOM ISPRED

  @HostBinding('class.open') isOpen = false; //! Ovim sam vezao klasu open za vrednost ovog svojstva isOpen, ako on bude true prokazace se klasa, ako ne nece

  @HostListener('click') toggleOpen(){ //! Sa HostListener-om postavio sam dogadjaj click na bilo koji html tag koji bude imao kao direktivu appDropdown. Takodje sam definisao da ce se menjati isOpen sto je bitno kako bi se stavljala ili otklanjala klasa open sa elementa.
    this.isOpen = !this.isOpen;
  }
  constructor() { }

}
