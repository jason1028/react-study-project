import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { connect } from "react-redux";
import { actionCreators } from "./store";

import Topic from "./components/Topic";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import AracList from "./components/List";
import Footer from "./components/Footer";

const { Provider, Consumer } = React.createContext();


class Home extends PureComponent {
    render() {
        const { showScroll } = this.props;
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg"/>
                    <Topic/>
                    <AracList/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                    <Provider value={ "你好" }>
                        <Footer/>
                    </Provider>
                </HomeRight>
                {
                    showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
                }
            </HomeWrapper>
            
        )
    }

    // 组件挂载完毕请求数据
    componentDidMount() {
        const {changeHomeData} = this.props;
        changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
    changeHomeData() {
       const action = actionCreators.getHomeInfo();
       dispatch(action);
    },
    changeScrollTopShow() {
        if(document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});

export { Consumer };
export default connect(mapStateToProps, mapDispatchToProps)(Home);