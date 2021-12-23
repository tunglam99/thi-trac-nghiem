import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  listQ = [
    {
      _id: '61c33b704d0e423e74fc2b7c',
      answer: {
        answerA: 'Hyperlinks and Text Markup Language',
        answerB: 'Home Tool Markup Language',
        answerC: 'Hyper Text Markup Language',
        answerD: 'Tất cả đều sai',
      },
      questionType: 'TKWS',
      question: 'Từ HTML là từ viết tắt của từ nào?',
      createdAt: '2021-12-22T14:51:28.284Z',
      updatedAt: '2021-12-22T14:51:28.284Z',
      __v: 0,
      id: '61c33b704d0e423e74fc2b7c',
    },
    {
      _id: '61c33c444d0e423e74fc2b81',
      answer: {
        answerA: 'HEAD, HTML, BODY',
        answerB: 'HEAD, TITLE, BODY',
        answerC: 'HEAD, BODY, HTML',
        answerD: 'HTML, HEAD, BODY',
      },
      questionType: 'TKWS',
      question:
        'Cấu trúc đơn giản của một trang HTML được khai báo theo thứ tự là:',
      createdAt: '2021-12-22T14:55:00.441Z',
      updatedAt: '2021-12-22T14:55:00.441Z',
      __v: 0,
      id: '61c33c444d0e423e74fc2b81',
    },
    {
      _id: '61c33d994d0e423e74fc2b92',
      answer: {
        answerA: '<PIC> ',
        answerB: '<IMG>',
        answerC: '<IMAGE> ',
        answerD: '<PICTURE>',
      },
      questionType: 'TKWS',
      question: 'Để chèn hình ảnh vào trang web ta dùng thẻ',
      createdAt: '2021-12-22T15:00:41.540Z',
      updatedAt: '2021-12-22T15:00:41.540Z',
      __v: 0,
      id: '61c33d994d0e423e74fc2b92',
    },
  ];
  ngOnInit(): void {}
  answer = [];
  change($event, id) {
    const exist = this.answer.find((x) => x.id === id);
    if (!exist) {
      this.answer.push({
        id: id,
        answer: $event.key,
      });
    } else {
      exist.answer = $event.key;
    }
    console.log(this.answer);
  }
}
