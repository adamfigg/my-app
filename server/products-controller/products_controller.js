module.exports = {
  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');

     dbInstance.allPaintings()
      .then( products => res.status(200).send( products ) )
      .catch( (error) => res.status(500).send(error) );
  },

};