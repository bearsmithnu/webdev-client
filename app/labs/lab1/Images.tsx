export default function Images() {
    return (
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img
          id="wd-starship"
          width="400px"
          alt="Starship"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <br />
        Loading a local image:
        <br />
        <img
          id="wd-teslabot"
          src="/images/teslabot.jpg"
          height="200px"
          alt="Tesla Bot (Optimus) humanoid robot"
        />
        <br />
        <img
          id="wd-your-image"
          src="/images/you want cancer with that dog.jpg"
          width="200px"
          alt="An advertisement by the plaintiffs in a lawsuit about carcinogens in hot dogs"
        />
          <img
          id="wd-ai-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMBnP1-xPBihoLdw_SJL8REKWhQ5rSaJDJYWTvNEIUpulPJcQcEHBgL0q"
          width="200px"
          alt="An Edible Arrangement, a bouquet of cut fruit and chocolate."
        />
      </div>
    );
}
