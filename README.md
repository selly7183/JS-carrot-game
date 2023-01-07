# Carrot-game
### Site : https://selly7183.github.io/JS-carrot-game/

![carrot](https://user-images.githubusercontent.com/88068412/210558891-2e7f12b5-f44d-47db-b2e1-7af81a195d0b.png)

1. 게임 빌드에서 당근과 벨레를 랜덤으로 배치함.(field.getBoundingClientRect()을 사용)
2. addItem 함수에 className, count, imgPath (클래스, 당근/벌레 갯수, 이미지)를 가져올 수 있게 만듬.
3. function randomNumber(min,max){
      return Math.random() * (max - min) + min;
   } => x,y 범위 안에서 랜덤 배치 (아이템들은 absolute여야 함)
4. 게임 시작/중지 버튼, 타이머, 스코어를 만들어서 설정해줌.
5. 타이머는 setInterval, clearInterval(timer)을 사용해서 1초씩 줄어들게 함수를 만들어줌.
6. 중지버튼을 누르면 게임이 멈추도록 clearInterval을 사용함. + REPLAY팝업 나오게함.
7. 이벤트 위임을 사용해서 field에서 벌레/당근이 맞다면 설정에 맞게 지워지도록(remove) 해줌.
=> if문을 사용해서 target.matches('.carrot'), target.matches('.carrot')
9. 벌레를 누르면 lose 팝업이 뜨도록, 게임을 이기면 win 팝업이 뜨도록하면서 게임을 끝냄.
10. HTMLMediaElment를 사용해서 new Audio('src/...')로 배경, 아이템 클릭, 팝업 등 사운드 추가
11. 팝업, 사운드, 게임 클래스를 만들어서 리팩토링.
