

const Smartsupp = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        var _smartsupp = _smartsupp || {};
        _smartsupp.key = '89fb81a920344350c2bdd70b85d984041c7d193e';
        window.smartsupp||(function(d) {
          var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
          s=d.getElementsByTagName('script')[0];c=d.createElement('script');
          c.type='text/javascript';c.charset='utf-8';c.async=true;
          c.src='//www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
        })(document);
      `,
    }}
  />
);

export default Smartsupp;
