<div class="grid-background"></div>
<div class="gradient-background"></div>

<style>
.grid-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1440px;
    background: 
        linear-gradient(to right, #E4E4E7 1px, transparent 1px),
        linear-gradient(to bottom, #E4E4E7 1px, transparent 1px);
    background-size: 96px 96px;
    background-position: center;
    z-index: -1;
}
.gradient-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1440px;
    background: radial-gradient(ellipse 100% 50% at 50% 20%, transparent 0%, white 50%);
    z-index: -1;
}
</style>