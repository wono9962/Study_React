// Component를 위해서 꼭 있어야 함
import React, { Component } from 'react';

// 여러개의 엘리먼트를 자동으로 생성하는 경우 console창에서 각각의 리스트 항목들은 키라는 props를 가지고 있어야 한다는 
// 에러가 뜨는데 이때 key를 이용하여 각각의 목록을 다른 것들과 구분할 수 있도록 식별자를 써주어야 함
class TOC extends Component{
    render(){
      console.log('TOC render');
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
          <li key={data[i].id}>
            <a 
              href={"/content/"+data[i].id}
              data-id={data[i].id}
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
              >{data[i].title}</a>
          </li>);
        i = i + 1;
      }
      return(
        <nav>
              <ul>
                  {lists}
              </ul>
        </nav>
      );
    }
  }
//export를 이용해서 TOC.js를 가져다 쓰는 쪽에서 TOC라는 클래스를 가져다 쓸수 있게 됨(외부에서 연결)
export default TOC;
