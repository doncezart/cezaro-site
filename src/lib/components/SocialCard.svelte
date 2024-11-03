<script>
    let { data } = $props();
</script>

<div class="container">
    <div class="avatar"><img src={data.avatar} alt="Avatar"></div>
    <div class="info">
        <div class="header">
            <h3 class="name">{data.name}</h3>
            <h3 class="username">{data.username}</h3>
        </div>
        <div class="footer">
            <h3 class="platform">{data.platform}</h3>
            <h3 class="arrow">&gt;</h3>
        </div>
    </div>
</div>

<style>
    /* CONTAINER */
    .container {
        background-color: #F4F4F5;
        display: flex;
        border-radius: 8px;
        padding: 12px;
        gap: 12px;
        flex: 0 0 auto;
        width: 320px;
        animation: push-left 4s infinite;
        border: solid 1px #E4E4E7;
    }
        @keyframes push-left {
    0% {
        transform: translateX(0);
    }
    20% {
        transform: translateX(-30px);
    }
    40% {
        transform: translateX(0);
    }
    60% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(0);
    }
    }

    /* AVATAR */
    .avatar {
        height: 62px;
        width: 62px;
        border-radius: 200px;
        flex-shrink: 0;
        overflow: hidden;
        
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    /* INFO */
    .info{
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;
        box-sizing: border-box;
    }
    /* NAME AND USERNAME */
    .header{
        display: flex;
        flex-direction: column;
        gap: 6px;
        text-align: start;
    }
    .name {
        font-size: 24px;
        color: #000000;
        font-weight: 600;
        line-height: 16px;
    }
    .username {
        font-size: 12px;
        color: #676767;
        font-weight: 300;
        line-height: 8px;
    }
    /* EXTRA */
    .footer {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .platform {
        line-height: 8px;
        font-size: 12px;
        font-weight: 600;
    }
    .arrow {
        line-height: 8px;
        font-size: 12px;
        font-weight: 600;
        text-align: right;
    }
</style>