import './index.less';
import Logo from '../logo/index';
let isWide = true;
function resize() {
    const clientWidth = document.body.clientWidth;
    // let rem = document.body.fontSize;
    clientWidth <= 600 ? isWide = false : isWide = true
    // console.log(clientWidth);
}
resize();
window.onresize = resize;
function Blog(){
    if(isWide) return <span>Blog</span>
    else return <span className="img-center blogs"></span>          
}
function Projects(){
    if(isWide) return <span>Projects</span>
    else return <span className="img-center projects"></span>          
}
export default function Header() {
  return (
    <>
    <header>
        <Logo></Logo>
        <nav>
            <div className="spacer"></div>
            <div className="right">
            <a className="dark-hover" href="/blogs" title="Blogs">
                <Blog></Blog>
                </a>
                <a className="dark-hover" href="/projects" title="Projects">
                    <Projects></Projects>
                </a>
                <a className="dark-hover" target="_blank" href="https://github.com/Gary-Leee" title="github">
                    <span className="img-center github"></span>
                </a>
                <a className="dark-hover" target="_blank" href="https://gitee.com/Gary-Leee" title="gitee">
                    <span className="img-center gitee"></span>
                </a>
                <a v-if="isHome" className="dark-hover" title="changeLang">
                    <span className="img-center changeLang"></span>
                </a>
                <a v-else className="dark-hover" href="/" title="gohome">
                    <span className="img-center gohome"></span>
                </a>
                <a className="dark-hover" title="Toggle Color Scheme">
                    <span className="img-center sun"></span>
                </a>
            </div>
        </nav>
    </header>

    </>
  )
}