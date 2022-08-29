import React, { Component } from "react";
class Footer extends Component {
  state = {
    skills: [
      {
        id: 1,
        skill: "Earth Science",
        url: "https://shop-pro.jp/accumsan/tellus/nisi/eu/orci/mauris.js?a=metus&libero=sapien&nam=ut&dui=nunc&proin=vestibulum&leo=ante&odio=ipsum&porttitor=primis&id=in&consequat=faucibus&in=orci&consequat=luctus&ut=et&nulla=ultrices&sed=posuere&accumsan=cubilia&felis=curae&ut=mauris&at=viverra&dolor=diam&quis=vitae&odio=quam&consequat=suspendisse&varius=potenti&integer=nullam&ac=porttitor&leo=lacus&pellentesque=at&ultrices=turpis&mattis=donec&odio=posuere&donec=metus",
      },
      {
        id: 2,
        skill: "Health Economics",
        url: "https://yelp.com/varius/ut/blandit/non/interdum.jpg?sapien=fusce&ut=congue&nunc=diam&vestibulum=id&ante=ornare&ipsum=imperdiet&primis=sapien&in=urna&faucibus=pretium&orci=nisl&luctus=ut&et=volutpat&ultrices=sapien&posuere=arcu&cubilia=sed&curae=augue&mauris=aliquam&viverra=erat&diam=volutpat&vitae=in&quam=congue&suspendisse=etiam&potenti=justo&nullam=etiam&porttitor=pretium&lacus=iaculis&at=justo&turpis=in&donec=hac&posuere=habitasse&metus=platea&vitae=dictumst&ipsum=etiam&aliquam=faucibus&non=cursus&mauris=urna&morbi=ut&non=tellus&lectus=nulla&aliquam=ut&sit=erat&amet=id&diam=mauris&in=vulputate&magna=elementum&bibendum=nullam&imperdiet=varius&nullam=nulla&orci=facilisi&pede=cras&venenatis=non&non=velit&sodales=nec&sed=nisi&tincidunt=vulputate&eu=nonummy&felis=maecenas&fusce=tincidunt&posuere=lacus&felis=at&sed=velit&lacus=vivamus&morbi=vel&sem=nulla&mauris=eget&laoreet=eros&ut=elementum",
      },
      {
        id: 3,
        skill: "IRI Xlerate",
        url: "http://yahoo.com/porttitor/id/consequat/in/consequat.aspx?rutrum=a&nulla=nibh&nunc=in&purus=quis&phasellus=justo&in=maecenas&felis=rhoncus&donec=aliquam&semper=lacus&sapien=morbi&a=quis&libero=tortor&nam=id&dui=nulla&proin=ultrices&leo=aliquet&odio=maecenas&porttitor=leo&id=odio&consequat=condimentum&in=id&consequat=luctus&ut=nec&nulla=molestie&sed=sed&accumsan=justo&felis=pellentesque&ut=viverra",
      },
      {
        id: 4,
        skill: "Rhetoric",
        url: "http://cbslocal.com/id/lobortis/convallis/tortor.jsp?nec=in&nisi=lectus&vulputate=pellentesque&nonummy=at&maecenas=nulla&tincidunt=suspendisse&lacus=potenti&at=cras&velit=in&vivamus=purus&vel=eu&nulla=magna&eget=vulputate&eros=luctus&elementum=cum&pellentesque=sociis&quisque=natoque&porta=penatibus&volutpat=et&erat=magnis&quisque=dis&erat=parturient&eros=montes&viverra=nascetur&eget=ridiculus&congue=mus&eget=vivamus&semper=vestibulum&rutrum=sagittis&nulla=sapien&nunc=cum&purus=sociis&phasellus=natoque&in=penatibus&felis=et",
      },
      {
        id: 5,
        skill: "Product Development",
        url: "https://weebly.com/morbi/vestibulum/velit/id/pretium/iaculis/diam.jsp?maecenas=sit&tincidunt=amet&lacus=eros&at=suspendisse&velit=accumsan&vivamus=tortor&vel=quis&nulla=turpis&eget=sed&eros=ante",
      },
      {
        id: 6,
        skill: "Clinical Psychology",
        url: "http://ocn.ne.jp/morbi/odio/odio/elementum/eu/interdum/eu.js?venenatis=quis&lacinia=justo&aenean=maecenas&sit=rhoncus&amet=aliquam&justo=lacus&morbi=morbi&ut=quis&odio=tortor&cras=id&mi=nulla&pede=ultrices&malesuada=aliquet&in=maecenas&imperdiet=leo&et=odio&commodo=condimentum",
      },
      {
        id: 7,
        skill: "Pension Funds",
        url: "https://shutterfly.com/sit/amet/turpis/elementum/ligula/vehicula/consequat.jpg?in=vestibulum&faucibus=ante&orci=ipsum&luctus=primis&et=in&ultrices=faucibus&posuere=orci&cubilia=luctus&curae=et&mauris=ultrices&viverra=posuere&diam=cubilia&vitae=curae&quam=mauris&suspendisse=viverra&potenti=diam&nullam=vitae&porttitor=quam&lacus=suspendisse&at=potenti&turpis=nullam&donec=porttitor&posuere=lacus&metus=at&vitae=turpis&ipsum=donec&aliquam=posuere&non=metus&mauris=vitae&morbi=ipsum&non=aliquam&lectus=non&aliquam=mauris&sit=morbi&amet=non&diam=lectus&in=aliquam&magna=sit&bibendum=amet&imperdiet=diam&nullam=in&orci=magna&pede=bibendum&venenatis=imperdiet&non=nullam&sodales=orci&sed=pede&tincidunt=venenatis&eu=non&felis=sodales&fusce=sed&posuere=tincidunt&felis=eu&sed=felis&lacus=fusce&morbi=posuere&sem=felis&mauris=sed&laoreet=lacus&ut=morbi&rhoncus=sem&aliquet=mauris&pulvinar=laoreet&sed=ut&nisl=rhoncus&nunc=aliquet&rhoncus=pulvinar&dui=sed&vel=nisl&sem=nunc&sed=rhoncus&sagittis=dui&nam=vel&congue=sem",
      },
      {
        id: 8,
        skill: "EViews",
        url: "https://biglobe.ne.jp/integer/ac/leo/pellentesque/ultrices/mattis/odio.xml?pretium=maecenas&quis=tincidunt&lectus=lacus&suspendisse=at&potenti=velit&in=vivamus&eleifend=vel&quam=nulla&a=eget&odio=eros&in=elementum&hac=pellentesque&habitasse=quisque&platea=porta&dictumst=volutpat&maecenas=erat&ut=quisque&massa=erat&quis=eros&augue=viverra&luctus=eget&tincidunt=congue&nulla=eget&mollis=semper&molestie=rutrum&lorem=nulla&quisque=nunc&ut=purus&erat=phasellus&curabitur=in&gravida=felis&nisi=donec&at=semper&nibh=sapien&in=a&hac=libero&habitasse=nam&platea=dui",
      },
      {
        id: 9,
        skill: "Foreign Affairs",
        url: "https://artisteer.com/dui/nec/nisi/volutpat.png?ut=rhoncus&suscipit=aliquet&a=pulvinar&feugiat=sed&et=nisl&eros=nunc&vestibulum=rhoncus&ac=dui&est=vel&lacinia=sem&nisi=sed&venenatis=sagittis&tristique=nam&fusce=congue&congue=risus&diam=semper&id=porta&ornare=volutpat&imperdiet=quam&sapien=pede&urna=lobortis&pretium=ligula&nisl=sit&ut=amet&volutpat=eleifend&sapien=pede&arcu=libero&sed=quis&augue=orci&aliquam=nullam&erat=molestie&volutpat=nibh&in=in&congue=lectus&etiam=pellentesque&justo=at&etiam=nulla&pretium=suspendisse&iaculis=potenti&justo=cras&in=in&hac=purus",
      },
      {
        id: 10,
        skill: "MBS",
        url: "https://example.com/eleifend/quam/a/odio.aspx?vestibulum=mi&aliquet=nulla&ultrices=ac&erat=enim&tortor=in&sollicitudin=tempor&mi=turpis&sit=nec&amet=euismod&lobortis=scelerisque&sapien=quam&sapien=turpis&non=adipiscing&mi=lorem&integer=vitae&ac=mattis&neque=nibh&duis=ligula&bibendum=nec&morbi=sem&non=duis&quam=aliquam&nec=convallis&dui=nunc&luctus=proin&rutrum=at&nulla=turpis&tellus=a&in=pede&sagittis=posuere&dui=nonummy&vel=integer&nisl=non&duis=velit&ac=donec&nibh=diam&fusce=neque&lacus=vestibulum&purus=eget&aliquet=vulputate&at=ut&feugiat=ultrices&non=vel&pretium=augue&quis=vestibulum&lectus=ante&suspendisse=ipsum&potenti=primis&in=in&eleifend=faucibus&quam=orci&a=luctus&odio=et&in=ultrices&hac=posuere&habitasse=cubilia&platea=curae&dictumst=donec&maecenas=pharetra&ut=magna&massa=vestibulum&quis=aliquet&augue=ultrices&luctus=erat&tincidunt=tortor&nulla=sollicitudin&mollis=mi&molestie=sit&lorem=amet&quisque=lobortis&ut=sapien&erat=sapien&curabitur=non&gravida=mi&nisi=integer&at=ac&nibh=neque&in=duis&hac=bibendum&habitasse=morbi&platea=non&dictumst=quam&aliquam=nec&augue=dui",
      },
      {
        id: 11,
        skill: "wxWidgets",
        url: "https://domainmarket.com/dapibus/dolor/vel/est.jsp?nullam=ut&sit=at&amet=dolor&turpis=quis&elementum=odio&ligula=consequat&vehicula=varius&consequat=integer&morbi=ac&a=leo&ipsum=pellentesque&integer=ultrices&a=mattis&nibh=odio&in=donec&quis=vitae&justo=nisi&maecenas=nam&rhoncus=ultrices&aliquam=libero&lacus=non&morbi=mattis&quis=pulvinar&tortor=nulla&id=pede&nulla=ullamcorper&ultrices=augue&aliquet=a&maecenas=suscipit&leo=nulla&odio=elit&condimentum=ac&id=nulla&luctus=sed&nec=vel&molestie=enim&sed=sit&justo=amet&pellentesque=nunc&viverra=viverra&pede=dapibus&ac=nulla&diam=suscipit&cras=ligula&pellentesque=in&volutpat=lacus&dui=curabitur&maecenas=at&tristique=ipsum",
      },
      {
        id: 12,
        skill: "PGP",
        url: "https://marketwatch.com/justo.jsp?sed=urna&tristique=pretium&in=nisl&tempus=ut&sit=volutpat&amet=sapien&sem=arcu&fusce=sed&consequat=augue&nulla=aliquam&nisl=erat&nunc=volutpat&nisl=in&duis=congue&bibendum=etiam&felis=justo&sed=etiam&interdum=pretium&venenatis=iaculis&turpis=justo&enim=in&blandit=hac&mi=habitasse&in=platea&porttitor=dictumst&pede=etiam&justo=faucibus&eu=cursus&massa=urna&donec=ut&dapibus=tellus&duis=nulla&at=ut&velit=erat&eu=id&est=mauris&congue=vulputate&elementum=elementum&in=nullam&hac=varius&habitasse=nulla&platea=facilisi&dictumst=cras&morbi=non&vestibulum=velit&velit=nec&id=nisi&pretium=vulputate&iaculis=nonummy&diam=maecenas&erat=tincidunt&fermentum=lacus&justo=at&nec=velit&condimentum=vivamus&neque=vel&sapien=nulla&placerat=eget&ante=eros&nulla=elementum&justo=pellentesque&aliquam=quisque&quis=porta&turpis=volutpat&eget=erat&elit=quisque&sodales=erat&scelerisque=eros&mauris=viverra&sit=eget&amet=congue&eros=eget&suspendisse=semper&accumsan=rutrum&tortor=nulla&quis=nunc&turpis=purus&sed=phasellus&ante=in&vivamus=felis&tortor=donec&duis=semper&mattis=sapien&egestas=a&metus=libero&aenean=nam&fermentum=dui&donec=proin&ut=leo&mauris=odio&eget=porttitor&massa=id&tempor=consequat&convallis=in&nulla=consequat&neque=ut&libero=nulla",
      },
      {
        id: 13,
        skill: "Minority Owned",
        url: "https://usda.gov/eu/nibh/quisque/id/justo/sit/amet.json?congue=lectus&eget=aliquam&semper=sit&rutrum=amet&nulla=diam&nunc=in&purus=magna&phasellus=bibendum&in=imperdiet&felis=nullam&donec=orci&semper=pede&sapien=venenatis&a=non&libero=sodales&nam=sed&dui=tincidunt&proin=eu&leo=felis&odio=fusce&porttitor=posuere&id=felis&consequat=sed&in=lacus&consequat=morbi&ut=sem&nulla=mauris&sed=laoreet&accumsan=ut&felis=rhoncus&ut=aliquet&at=pulvinar&dolor=sed&quis=nisl&odio=nunc&consequat=rhoncus&varius=dui&integer=vel&ac=sem&leo=sed&pellentesque=sagittis&ultrices=nam&mattis=congue&odio=risus&donec=semper&vitae=porta&nisi=volutpat&nam=quam&ultrices=pede&libero=lobortis&non=ligula&mattis=sit&pulvinar=amet&nulla=eleifend&pede=pede&ullamcorper=libero&augue=quis&a=orci&suscipit=nullam&nulla=molestie&elit=nibh&ac=in&nulla=lectus&sed=pellentesque&vel=at&enim=nulla&sit=suspendisse&amet=potenti&nunc=cras&viverra=in&dapibus=purus&nulla=eu&suscipit=magna&ligula=vulputate&in=luctus&lacus=cum&curabitur=sociis&at=natoque&ipsum=penatibus&ac=et&tellus=magnis&semper=dis&interdum=parturient&mauris=montes&ullamcorper=nascetur&purus=ridiculus&sit=mus&amet=vivamus&nulla=vestibulum&quisque=sagittis&arcu=sapien&libero=cum&rutrum=sociis&ac=natoque&lobortis=penatibus&vel=et",
      },
      {
        id: 14,
        skill: "Custom Furniture",
        url: "http://booking.com/sodales.jpg?bibendum=auctor&morbi=sed&non=tristique&quam=in&nec=tempus&dui=sit",
      },
      {
        id: 15,
        skill: "eGaming",
        url: "http://springer.com/donec/ut/mauris.jpg?tortor=volutpat&sollicitudin=dui&mi=maecenas&sit=tristique&amet=est&lobortis=et&sapien=tempus&sapien=semper&non=est&mi=quam&integer=pharetra&ac=magna&neque=ac&duis=consequat&bibendum=metus&morbi=sapien&non=ut&quam=nunc&nec=vestibulum&dui=ante&luctus=ipsum&rutrum=primis&nulla=in&tellus=faucibus&in=orci&sagittis=luctus&dui=et&vel=ultrices&nisl=posuere&duis=cubilia",
      },
      {
        id: 16,
        skill: "CSRs",
        url: "https://sciencedirect.com/rhoncus/dui/vel.png?id=sit&ornare=amet&imperdiet=sapien&sapien=dignissim&urna=vestibulum&pretium=vestibulum&nisl=ante&ut=ipsum&volutpat=primis&sapien=in&arcu=faucibus&sed=orci&augue=luctus&aliquam=et&erat=ultrices&volutpat=posuere&in=cubilia&congue=curae&etiam=nulla&justo=dapibus&etiam=dolor&pretium=vel&iaculis=est&justo=donec&in=odio&hac=justo&habitasse=sollicitudin&platea=ut&dictumst=suscipit&etiam=a&faucibus=feugiat&cursus=et&urna=eros&ut=vestibulum&tellus=ac&nulla=est&ut=lacinia&erat=nisi&id=venenatis&mauris=tristique&vulputate=fusce&elementum=congue&nullam=diam&varius=id&nulla=ornare&facilisi=imperdiet&cras=sapien&non=urna&velit=pretium&nec=nisl&nisi=ut&vulputate=volutpat&nonummy=sapien",
      },
      {
        id: 17,
        skill: "TMDLs",
        url: "https://census.gov/non/velit/nec/nisi/vulputate/nonummy.jsp?ligula=quisque&pellentesque=erat&ultrices=eros&phasellus=viverra&id=eget&sapien=congue&in=eget&sapien=semper&iaculis=rutrum&congue=nulla&vivamus=nunc&metus=purus&arcu=phasellus&adipiscing=in&molestie=felis&hendrerit=donec&at=semper",
      },
      {
        id: 18,
        skill: "Change Orders",
        url: "https://macromedia.com/luctus/rutrum/nulla/tellus.xml?hac=pulvinar&habitasse=sed&platea=nisl&dictumst=nunc&aliquam=rhoncus&augue=dui&quam=vel&sollicitudin=sem&vitae=sed&consectetuer=sagittis&eget=nam&rutrum=congue&at=risus&lorem=semper&integer=porta&tincidunt=volutpat&ante=quam&vel=pede",
      },
      {
        id: 19,
        skill: "CQC",
        url: "https://bbb.org/id/nisl.jpg?id=ipsum&massa=primis&id=in&nisl=faucibus&venenatis=orci&lacinia=luctus&aenean=et&sit=ultrices&amet=posuere&justo=cubilia&morbi=curae&ut=mauris&odio=viverra&cras=diam&mi=vitae&pede=quam&malesuada=suspendisse&in=potenti&imperdiet=nullam&et=porttitor&commodo=lacus&vulputate=at&justo=turpis&in=donec&blandit=posuere&ultrices=metus&enim=vitae&lorem=ipsum&ipsum=aliquam&dolor=non&sit=mauris&amet=morbi&consectetuer=non&adipiscing=lectus&elit=aliquam&proin=sit&interdum=amet&mauris=diam&non=in&ligula=magna&pellentesque=bibendum&ultrices=imperdiet&phasellus=nullam&id=orci&sapien=pede&in=venenatis&sapien=non&iaculis=sodales&congue=sed&vivamus=tincidunt&metus=eu&arcu=felis&adipiscing=fusce&molestie=posuere&hendrerit=felis&at=sed&vulputate=lacus&vitae=morbi&nisl=sem&aenean=mauris&lectus=laoreet&pellentesque=ut&eget=rhoncus&nunc=aliquet&donec=pulvinar&quis=sed&orci=nisl&eget=nunc&orci=rhoncus&vehicula=dui&condimentum=vel&curabitur=sem&in=sed&libero=sagittis&ut=nam&massa=congue&volutpat=risus&convallis=semper&morbi=porta&odio=volutpat&odio=quam&elementum=pede&eu=lobortis&interdum=ligula&eu=sit&tincidunt=amet&in=eleifend&leo=pede&maecenas=libero",
      },
      {
        id: 20,
        skill: "Short Films",
        url: "http://ustream.tv/sed/magna/at.aspx?ac=nisi&est=vulputate&lacinia=nonummy&nisi=maecenas&venenatis=tincidunt&tristique=lacus&fusce=at&congue=velit&diam=vivamus&id=vel&ornare=nulla&imperdiet=eget&sapien=eros&urna=elementum&pretium=pellentesque&nisl=quisque&ut=porta&volutpat=volutpat&sapien=erat&arcu=quisque&sed=erat&augue=eros&aliquam=viverra&erat=eget&volutpat=congue&in=eget&congue=semper&etiam=rutrum&justo=nulla&etiam=nunc&pretium=purus&iaculis=phasellus&justo=in&in=felis&hac=donec&habitasse=semper&platea=sapien&dictumst=a&etiam=libero&faucibus=nam&cursus=dui&urna=proin&ut=leo&tellus=odio&nulla=porttitor&ut=id&erat=consequat&id=in&mauris=consequat&vulputate=ut&elementum=nulla&nullam=sed&varius=accumsan",
      },
    ],
    footerLine: 5,
  };
  render() {
    const { skills, footerLine } = this.state;
    return (
      <footer className="bg-success ">
        <div className="container-fluid">
          <div className={`row row-cols-${footerLine}`}>
            {skills.map((l) => (
              <div className="col" key={l.id}>
                <div className=" p-1">
                  <a className="text-light text-decoration-none" href="{l.url}">
                    {l.skill}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
