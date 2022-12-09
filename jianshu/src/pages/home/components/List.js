import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class AracList extends PureComponent {

    render() {
        const { list, page,  getMoreList } = this.props;
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <Link key={item.get('id')} to="/detail">
                                <ListItem>
                                    <img className="list-pic" src={ item.get('imgUrl') }/>
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page));
    }
});

export default connect(mapState, mapDispatchToProps)(AracList);