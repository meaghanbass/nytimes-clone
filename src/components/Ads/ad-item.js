import React from "react"
import { StaticQuery, graphql } from "gatsby"

const AdItem = ({ children }) => (
    <StaticQuery 
        query={graphql`
            query adItemQuery {
                allAdItemsJson {
                    edges {
                        node {
                            label
                            link
                            image
                        }
                    }
                }
            }
        `}
        render={data => (
            <>
            <div>{getAdLabels(data)}</div>
            </>
        )}
    />
);

function getAdLabels(data) {
    const adItemsArray = [];
    data.allAdItemsJson.edges.forEach(item =>
        adItemsArray.push(
            <div className="ad-item" key={item.node.label}>
                <img src={item.node.image} alt="nope"/>
                <div>
                    <p className="title">{item.node.label}</p>
                    <p className="snippet">{item.node.link}</p>
                </div>
            </div>
        )
    );
    return adItemsArray;
}

export default AdItem