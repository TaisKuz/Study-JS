import './../stylus/columnBox.styl';

import { Column } from './column.js';

var ColumnBox = React.createClass({
    getDefaultProps: function () {
        return {
            columns: []
        };
    },

    render: function() {
        var columnNodes = this.props.columns.map((column, index) => {
            return (
                <Column key={index} src={column.src} alt={column.alt} title={column.title} description={column.description}/>
            );
        });

        return (
            <div className="columnBox">
                {columnNodes}
            </div>
        );
    }
});

export { ColumnBox };