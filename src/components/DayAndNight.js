import React, { Component } from 'react';
import Music from './KidCudi';

class DayNite extends Component {
    state = {
        title: true,
        isDay: true,
        button: true
    }
    handleDay = () => {
        this.setState({ isDay: !this.state.isDay });
        this.setState({ title: !this.state.title });
        this.setState({ button: !this.state.button });
    }
    render() {
        return (
            <div className="wrapper" style={this.state.isDay ? {
                background: "white"
            } : {
                background: "black",
                color: "white"
            }}>

                <h1>{this.state.title ? "Day" : "Nite"}</h1>
                <Music />
                <button onClick={this.handleDay} style={this.state.isDay ? {
                    background: "white"
                } : {
                    background: "black", color: "white"
                }}>
                    {this.state.button ? "Day to Nite" : "Nite to Day"}</button>

                <p style={this.state.isDay ? {
                    color: "black"
                } : {
                    color: "white"
                }}>
                    [Intro]<br />Uh, uh, uh, uh<br />Uh, uh<br /><br />[Verse 1]<br />
                    Day and night<br />I toss and turn, I keep stressing my mind, mind<br />
                    I look for peace, but see, I don't attain<br />What I need for keeps,
                    this silly game we play, play<br />Now look at this<br />Madness the magnet
                    keeps attracting me, me<br />I try to run, but see, I'm not that fast<br />
                    I think I'm first but surely finish last, last<br /><br />
                    [Chorus]<br />'Cause day and night<br />The lonely stoner seems to free his
                    mind at night<br />He's all alone through the day and night<br />The lonely
                    loner seems to free his mind at night, at, at, at night<br />Day and night<br />
                    The lonely stoner seems to free his mind at night<br />He's all alone, some things
                    will never change<br />The lonely loner seems to free his mind at night, at, at,
                    at night<br /><br />[Verse 2]<br />Hold the phone<br />
                    The lonely stoner, Mr. Solo Dolo<br />He's on the move, can't seem to shake
                    the shade<br />Within his dreams he sees the life he made, made<br />
                    The pain is deep<br />A silent sleeper, you won't hear a peep, peep<br />
                    The girl he wants don't seem to want him too<br />It seems the feelings
                    that she had are through, through
                    <br />
                    [Chorus]<br />'Cause day and night<br />The lonely stoner seems to free his
                    mind at night<br />He's all alone through the day and night<br />The lonely
                    loner seems to free his mind at night, at, at, at night<br />Day and night<br />
                    The lonely stoner seems to free his mind at night<br />He's all alone, some things
                    will never change<br />The lonely loner seems to free his mind at night, at, at, at
                    night<br /><br />[Verse 3]<br />Slow mo'<br />When the tempo slows up and creates that
                    new, new<br />
                    He seems alive though he is feelin' blue<br />
                    The sun is shinin', man he's super cool, cool<br />
                    The lonely nights<br />They fade away, he slips into his white Nikes<br />
                    He smokes a clip and then he's on the way<br />
                    To free his mind in search of<br />To free his mind in search of, to free his
                    mind in search of<br /><br />
                    [Chorus]<br />Day and night<br />The lonely stoner seems to free his mind at night<br />
                    He's all alone through the day and night<br />The lonely loner seems to free his mind at night,
                    at, at, at night<br />Day and night<br />The lonely stoner seems to free his mind at night
                    <br />He's all alone, some things will never change<br />The lonely loner seems to free his mind
                    at night<br />At, at, at night, night<br />At, at, at night, night<br /><br />
                    [Outro]
                    <br />Na-na-na-na-na-na, Kid Cudi<br /><em>Cleveland status</em><em>, </em>
                    <em>grind all day</em><br />Cleveland status, grind all night<br />Cleveland status, grind all
                    day<br />Cleveland status, grind all night
                </p>
            </div>

        );
    }
}

export default DayNite;