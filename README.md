# blog_crud

install ejs
npm install ejs
and register
// register view engine
app.ser('view engine', 'ejs')
pakeisti folder structure.
rename pages papke to views
ir papkej pakeist .html to .ejs
// nustatom render view homedir(pagrindine direktorija)
app.set('views', 'src/views');
//atvaizduojam puslapi
res.render('index)
