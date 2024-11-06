import { Component, computed, EventEmitter, input, Input, Output, output, signal } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //without signals
  @Input({ required: true }) user!: User //input read only cant be changed in the ts as the data in the previous way (way 1)
  @Input({ required: true }) selected!: boolean
  @Output() select = new EventEmitter<string>()


  get imagePath() {
      return "/assets/characters/" + this.user.avatar
    }

  onPressed() {
    this.select.emit(this.user.id)
  }

  // with signlas
  // avatar = input.required<string>()
  // name = input.required<string>()
  // imagePath = computed(() => { return  "../../assets/characters/" + this.avatar()})



  // (Way 1) Putting the data in a value and making some basics (cool)

  // By signals way
  // choosedName = signal(DUMMY_USERS[randomIndex])
  // imagePath = computed(() => '../../assets/characters/' + this.choosedName().avatar)

  // onPressed() {
  //   let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
  //   this.choosedName.set(DUMMY_USERS[randomIndex])
  // }


  // By zone way
  // choosedName = DUMMY_USERS[randomIndex]

  // get imagePath() {
  //   return "../../assets/characters/" + this.choosedName.avatar
  // }
  
  // onPressed() {
  //   let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
  //   this.choosedName = DUMMY_USERS[randomIndex]
  // }
}
