module PreviousWork exposing (main)

import Html exposing (div, text, ol, li)
import Html.Attributes exposing (class, id, attribute)


-- import Html.Events


main =
    div [ class "container" ]
        [ div
            [ id "myCarousel"
            , class "carousel slide"
            , attribute "data-ride" "carousel"
            ]
            [ ol [ class "carousel-indicators" ]
                [ li
                    [ attribute "data-target" "#myCarousel"
                    , attribute "data-slide-to" "0"
                    , class "active"
                    ]
                    []
                , li
                    [ attribute "data-target" "#myCarousel"
                    , attribute "data-slide-to" "1"
                    ]
                    []
                , li
                    [ attribute "data-target" "#myCarousel"
                    , attribute "data-slide-to" "4"
                    ]
                    []
                , li
                    [ attribute "data-target" "#myCarousel"
                    , attribute "data-slide-to" "3"
                    ]
                    []
                ]
            ]
        ]
