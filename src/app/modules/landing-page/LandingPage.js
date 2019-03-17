import React, { Component } from "react";
import "./LandingPage.scss";
import { enquireScreen } from "enquire-js";
import { Link } from "react-router-dom";
import Helmet from "react-helmet-async";

import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import { Button, Icon } from "antd";
import { OverPack } from "rc-scroll-anim";

import Header from "./Header";

let isMobile;

enquireScreen(b => {
    isMobile = b;
});

class LandingPage extends Component {
    state = {
        isMobile,
        mode: true,
    };

    componentDidMount() {
        enquireScreen(b => {
            this.setState({
                isMobile: !!b,
            });
        });
    }

    changeMode = () => {
        const { mode } = this.state;

        this.setState({
            mode: !mode,
        });
    };

    render() {
        const { isMobile, mode } = this.state;

        return (
            <React.Fragment>
                <Helmet>
                    <title>FPTU Tech Insights</title>
                </Helmet>
                <Header />
                <div className="banner-wrapper">
                    {isMobile && (
                        <TweenOne
                            animation={{ opacity: 1 }}
                            className="banner-image-wrapper"
                        >
                            <div className="home-banner-image">
                                <img
                                    alt="banner"
                                    src="/assets/images/index.png"
                                    width="100%"
                                />
                            </div>
                        </TweenOne>
                    )}
                    <QueueAnim
                        className="banner-title-wrapper"
                        type={isMobile ? "bottom" : "right"}
                    >
                        <div key="line" className="title-line-wrapper">
                            <div
                                className="title-line"
                                style={{ transform: "translateX(-64px)" }}
                            />
                        </div>
                        <h1 key="h1">FPTU TECH</h1>
                        <p key="content">
                            FPT University of Technology Insights
                        </p>
                        <div key="button" className="button-wrapper">
                            <Link to="/send">
                                <Button size="large" type="primary">
                                    <Icon type="heart" />
                                    Confession
                                </Button>
                            </Link>
                            <Link to="/medium">
                                <Button
                                    size="large"
                                    style={{ margin: "0 16px" }}
                                    type="primary"
                                    ghost
                                >
                                    <Icon type="coffee" />
                                    Dev Đọc
                                </Button>
                            </Link>
                        </div>
                    </QueueAnim>
                    {!isMobile && (
                        <TweenOne
                            animation={{ opacity: 1 }}
                            className="banner-image-wrapper"
                        >
                            <img
                                alt="banner"
                                src="/assets/images/index.png"
                                width="100%"
                            />
                        </TweenOne>
                    )}
                </div>
                <div className="home-page page2">
                    <div className="home-page-wrapper">
                        <div className="title-line-wrapper page2-line">
                            <div className="title-line" />
                        </div>
                        <h2>
                            Let’s 
                            {' '}
                            <span>Join Us</span> 
                            {' '}
                            <Icon type="down" />
                        </h2>
                        <OverPack>
                            <QueueAnim
                                key="queue"
                                type="bottom"
                                leaveReverse
                                className="page2-content"
                            >
                                <p key="p" className="page-content">
                                    The more commit you donate to the repos, the
                                    more knowledge you will get
                                </p>
                                <div key="code1" className="home-code">
                                    {mode && (
                                        <div>
                                            <div>
                                                $ 
                                                {' '}
                                                <span>git clone</span>
                                                {" "}
                                                git@github.com/gosu-team/fptu-fe.git
                                            </div>
                                            <div>$ cd fptu-fe</div>
                                            <div>$ npm install</div>
                                            <div>$ npm run dev</div>
                                        </div>
                                    )}
                                    {!mode && (
                                        <div>
                                            <div>
                                                $ 
                                                {' '}
                                                <span>git clone</span>
                                                {" "}
                                                git@github.com/gosu-team/fptu-api.git
                                            </div>
                                            <div>$ cd fptu-api</div>
                                            <div>$ go get -u</div>
                                            <div>
                                                $ go run ./cmd/app/main.go
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <p key="p2" className="page-content">
                                    This is 
                                    {' '}
                                    {mode ? "front-end" : "back-end"}
                                    {" "}
                                    part with
                                    {" "}
                                    <strong>{mode ? "React" : "Go"}</strong>
, if
                                    you like
                                    {mode ? " back-end" : " front-end"}
                                    {' '}
then
                                    click
                                    <a href="#!" onClick={this.changeMode}>
                                        {" "}
                                        here
                                    </a>
                                    {" "}
                                    to join with
                                    <strong> 
                                        {' '}
                                        {mode ? "Go" : "React"}
                                    </strong>
                                </p>
                                <div key="button" style={{ marginTop: 88 }}>
                                    <a
                                        href="https://github.com/gosu-team/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button type="primary">
                                            <Icon type="github" />
                                            Our Github Organization
                                        </Button>
                                    </a>
                                </div>
                            </QueueAnim>
                        </OverPack>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default LandingPage;