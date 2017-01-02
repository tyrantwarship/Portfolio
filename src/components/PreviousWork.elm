module PreviousWork exposing (main)

import Html exposing (div, text, ol, li, a, img, h3, p, span)
import Html.Attributes exposing (class, id, attribute, target, href, alt, src)


-- import Html.Events


main : Html.Html msg
main =
    div [ class "container" ]
        [ div
            [ id "myCarousel"
            , class "carousel slide"
            , attribute "data-ride" "carousel"
            ]
            [ carouselIndicatorsView
            , carouselInnerView
            , carouselControlView "left" "prev" "Previous"
            , carouselControlView "right" "next" "Next"
            ]
        ]


carouselIndicatorsView : Html.Html msg
carouselIndicatorsView =
    ol [ class "carousel-indicators" ] <|
        List.map
            (\( className, slide ) ->
                li
                    [ attribute "data-target" "#myCarousel"
                    , attribute "data-slide-to" <| toString slide
                    , class className
                    ]
                    []
            )
            [ ( "active", 0 ), ( "", 1 ), ( "", 2 ), ( "", 3 ) ]


carouselInnerView : Html.Html msg
carouselInnerView =
    div
        [ class "carousel-inner"
        , attribute "role" "listbox"
        ]
    <|
        List.map (\carouselItem -> carouselItemView carouselItem) carouselItems


type alias CarouselItem =
    { className : String
    , hrefLink : String
    , imgAlt : String
    , imgSrc : String
    , titleText : String
    , descText : String
    }


carouselItems : List CarouselItem
carouselItems =
    [ CarouselItem "simon-item" "http://tyrantwarship.github.io/FCC-SimonSays-Zipline" "simon-project" "https://raw.githubusercontent.com/tyrantwarship/FCC-SimonSays-Zipline/master/demo-first.png" "Simon Says" """Web application based on the timeless game, "Simon Says". Built with React and Sass.""" ]


carouselItemView : CarouselItem -> Html.Html msg
carouselItemView { className, hrefLink, imgAlt, imgSrc, titleText, descText } =
    div [ class <| "item active " ++ className ]
        [ a
            [ target "_blank"
            , href hrefLink
            ]
            [ img
                [ alt imgAlt
                , src imgSrc
                ]
                []
            , div [ class "carousel-caption caption-description" ]
                [ h3 [] [ text titleText ]
                , p [] [ text descText ]
                ]
            ]
        ]


carouselControlView : String -> String -> String -> Html.Html msg
carouselControlView direction dataSlide displayText =
    a
        [ class <| direction ++ " carousel-control"
        , href "#myCarousel"
        , attribute "role" "button"
        , attribute "data-slide" dataSlide
        ]
        [ span
            [ class <| "glyphicon glyphicon-chevron-" ++ direction
            , attribute "aria-hidden" "true"
            ]
            []
        , span [ class "sr-only" ] [ text displayText ]
        ]
