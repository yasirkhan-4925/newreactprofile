import Card from "./Card";
import MyData from "./MyData";
import Loading from "./Loading";
import React from "react";
import ReactPaginate from "react-paginate";


class ShownData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      onpageData: [],
      data: [],
      perPage: 6,
      currentPage: 0,
      isloading: true,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
    window.scroll(0,0)
  };

  loadMoreData() {
    const data = this.state.onpageData;
    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      data: slice,
    });
  }

  componentDidMount() {

    setTimeout(() => {
        var data = MyData;
    var slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      onpageData: MyData,
      data: slice,
      isloading:false
    });
    }, 1500);
    
  }

  render() {
    
    return (
      <>
      
          <div className="container">
          <div className="row">
            {this.state.isloading ? <Loading/> :this.state.data.map((val, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-4 col-md-6 col-12 col-sm-6 my-4"
                >
                  <Card
                    imagelink={val.imagelink}
                    details={val.details}
                    buttonlink={val.buttonlink}
                    title={val.title}
                  />
                </div>
              );
            })}
          </div>

          
         

        </div>
       
           
        {this.state.isloading==false && <ReactPaginate
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                  pageClassName={"listyle"}
                  pageLinkClassName={"pagelink"}
                  activeClassName={"active"}
                  previousClassName={"previous"}
                  nextClassName={"next"}
                  disabledClassName={"disabledbutton"}
                  breakClassName={"breakbutton"}
                />  }
                

                
             
            
            

      </>
    );
  }
}

export default ShownData;
