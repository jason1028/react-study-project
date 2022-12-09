import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { RecomendList, RecommendItem } from '../style'

class Recommend extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <RecomendList>
                {
                    list && list.map((item) => {
                        return (
                            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}>
                                {/* <img className="recomend-pic" src={item.get('imgUrl')}/> */}
                            </RecommendItem>
                        )
                    })
                }
            </RecomendList>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'recomendList'])
});

export default connect(mapStateToProps, null)(Recommend);